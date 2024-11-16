import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://web30.my.id', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:web3idn.crypto@mail3.me');

  return 'Opening mailto:web3idn.crypto@mail3.me...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=z_piJu1UkkI', '_blank');

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/Web3ID/terminal-blockchain', '_blank');

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

// export const banner = (args?: string[]): string => {
//   return `
// ╦ ╦╔═╗╔╗ ╔═╗  ╔╦╗╔═╗╦═╗╔╦╗╦╔╗╔╔═╗╦  
// ║║║║╣ ╠╩╗╠╣    ║ ║╣ ╠╦╝║║║║║║║╠═╣║  
// ╚╩╝╚═╝╚═╝╚    ╩ ╚═╝╩╚═╩ ╩╩╝╚╝╩ ╩╩═╝
//                 v${packageJson.version}

// Type 'web3help' to see available commands.v${packageJson.version}

// Type 'help' to see list of available commands.

// --
// The project is open-source 🎉 type 'repo' to check out the repository.
// --
// `;
// };

export const banner = async (args?: string[]): Promise<string> => {
  return `
██╗    ██╗███████╗██████╗ ██████╗     ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
██║    ██║██╔════╝██╔══██╗╚════██╗    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
██║ █╗ ██║█████╗  ██████╔╝ █████╔╝       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
██║███╗██║██╔══╝  ██╔══██╗ ╚═══██╗       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
╚███╔███╔╝███████╗██████╔╝██████╔╝       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝        ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
                                                                                                          
Welcome to Web3 Terminal!
  
This is a blockchain-focused terminal interface.
Type 'help' to see available commands.
`;
};

