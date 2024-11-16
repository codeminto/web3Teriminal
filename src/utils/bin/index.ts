export * from './about';
export * from './projects';
export * from './social';
export * from './theme';
export * from './utils';
export * from './weather';
export * from './neofetch';
export { web3 } from './web3';
export { blockscout } from './blockscout';

// Additional useful commands
export * from './crypto';
export { help } from './help';
export * from './network';
export * from './search';

// Command definitions
export const commands = {
  about: 'About me',
  blockscout: 'Blockchain explorer interface',
  clear: 'Clear terminal',
  crypto: 'Cryptocurrency price checker',
  help: 'Show help menu',
  network: 'Network utilities',
  neofetch: 'Display system info',
  projects: 'View projects',
  search: 'Search blockchain data',
  social: 'Display social links',
  theme: 'Change theme',
  weather: 'Check weather',
  web3: 'Web3 utilities'
};


export const commandExists = (command: string): boolean => {
  const cmd = command.split(' ')[0];
  return Object.keys(bin).indexOf(cmd) !== -1;
};
export const bin = {
  help: () => commands.help,
  clear: () => commands.clear,
  blockchain: () => commands.blockscout,
  banner: () => 'Banner message...',
  welcome: () => 'Welcome message...',
  summon: () => 'Connecting to Web3 wallet...',
  balance: () => 'Checking wallet balance...',
  transfer: () => 'Transfer tokens...',
  nft: () => 'NFT commands...',
  contract: () => 'Smart contract interactions...',
  gas: () => 'Checking gas prices...',
  market: () => 'Getting market prices...',
  history: () => 'Transaction history...',
  // Add other commands as needed
};
