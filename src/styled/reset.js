import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  body{
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default baseStyles;
