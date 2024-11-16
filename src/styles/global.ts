import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    margin: 0;
    padding: 15px 15px 50vh 15px;
    font-family: 'Hack', monospace;
  }

  ::selection {
    background-color: ${({ theme }) => theme.selection};
    color: ${({ theme }) => theme.foreground};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.selection};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.comment};
  }
`;

export default GlobalStyle; 