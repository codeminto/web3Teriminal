import Web3 from 'web3';
import packageJson from '../../../package.json';

// Types and interfaces
declare global {
  interface Window {
    ethereum: any;
  }
}

// Helper function to check connection
const checkConnection = async (): Promise<string> => {
  if (typeof window.ethereum === 'undefined') {
    return '🔴 No Web3 Wallet';
  }
  try {
    const accounts = await window.ethereum.request({ 
      method: 'eth_accounts' 
    });
    return accounts.length > 0 ? 
      `🟢 Connected: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}` : 
      '🟡 Wallet Found (Not Connected)';
  } catch {
    return '🔴 Connection Error';
  }
};

let web3Instance: Web3 | null = null;
let currentAccount: string | null = null;

const initWeb3 = async (): Promise<boolean> => {
  if (typeof window.ethereum !== 'undefined') {
    web3Instance = new Web3(window.ethereum);
    return true;
  }
  return false;
};

// Command exports
export const about = async (args: string[]): Promise<string> => {
  return `
Web3 Terminal - Your Gateway to the Blockchain
Version: ${packageJson.version}
Created by: Web3 Terminal Team
Repository: ${packageJson.repository.url}
License: ${packageJson.license}

A command-line interface for interacting with Web3 and blockchain networks.
Type 'web3help' to see available commands.
`;
};

export const summon = async (args: string[]): Promise<string> => {
  if (!initWeb3()) {
    return 'No Web3 wallet detected. Please install MetaMask or another Web3 wallet.';
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    currentAccount = accounts[0];
    return `Connected to wallet: ${accounts[0]}`;
  } catch (error) {
    return `Failed to connect: ${error.message}`;
  }
};

export const web3help = async (args: string[]): Promise<string> => {
  return `
🌐 Web3 Terminal Commands:
-------------------------
  summon     - Connect Web3 wallet
  balance    - Check wallet balance
  network    - Show current network
  gas        - Check gas prices
  block      - Get latest block number
  send       - Send ETH (usage: send <address> <amount>)
  status     - Check wallet connection status
  about      - About Web3 Terminal
  web3help   - Show this help message

💡 Tips:
  - Use 'summon' first to connect your wallet
  - Check 'network' to ensure you're on the right chain
  - Always verify addresses when using 'send'
`;
};

export const balance = async (args: string[]): Promise<string> => {
  if (!web3Instance || !currentAccount) {
    return 'Please use "summon" first to connect your wallet';
  }

  try {
    const balance = await web3Instance.eth.getBalance(currentAccount);
    const ethBalance = web3Instance.utils.fromWei(balance, 'ether');
    return `Balance: ${ethBalance} ETH`;
  } catch (error) {
    return `Failed to get balance: ${error.message}`;
  }
};

export const network = async (args: string[]): Promise<string> => {
  if (!web3Instance) {
    return 'Please use "summon" first to connect your wallet';
  }

  try {
    const networkId = await web3Instance.eth.net.getId();
    const networks: { [key: number]: string } = {
      1: 'Ethereum Mainnet',
      3: 'Ropsten Testnet',
      4: 'Rinkeby Testnet',
      5: 'Goerli Testnet',
      42: 'Kovan Testnet',
      56: 'BSC Mainnet',
      97: 'BSC Testnet',
      137: 'Polygon Mainnet',
      80001: 'Mumbai Testnet'
    };
    return `Connected to: ${networks[networkId] || `Network ID ${networkId}`}`;
  } catch (error) {
    return `Failed to get network: ${error.message}`;
  }
};

// Export all commands as a single object
export const web3 = {
  about,
  summon,
  web3help,
  balance,
  network
}; 