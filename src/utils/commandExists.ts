import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = [
    'clear',
    'about',
    'blockscout',
    'crypto',
    'help',
    'network',
    'neofetch',
    'projects',
    'search',
    'social',
    'theme',
    'weather',
    'web3',
    ...Object.keys(bin)
  ];

  return commands.indexOf(command.split(' ')[0]) !== -1;
};

// Add command suggestions for auto-completion
export const getCommandSuggestions = (input: string): string[] => {
  const commands = [
    'clear',
    'about',
    'blockscout',
    'crypto',
    'help',
    'network',
    'neofetch',
    'projects',
    'search',
    'social',
    'theme',
    'weather',
    'web3'
  ];

  return commands.filter(cmd => 
    cmd.startsWith(input.toLowerCase()) && cmd !== input.toLowerCase()
  );
};
