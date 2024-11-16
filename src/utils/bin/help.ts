import { commands } from './index';

export const help = async (args: string[]): Promise<string> => {
  const commandList = Object.entries(commands)
    .map(([name, description]) => `  ${name.padEnd(12)} - ${description}`)
    .join('\n');

  return `Available commands:
${commandList}

[tab] for auto-completion.
[ctrl+l] to clear terminal.
Type 'commandname --help' for more info about specific command.
`;
}; 