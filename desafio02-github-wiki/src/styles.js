import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --background-color: #22272e;
        --text-color: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', 'Roboto', sans-serif;
    }
    
    body {
        background-color: var(--background-color);
        color: var(--text-color);
    }
  
  
`;