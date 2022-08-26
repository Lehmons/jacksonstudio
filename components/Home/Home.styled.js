// ***********************************
// Home
// ***********************************

import styled from "styled-components";
import { media } from "../Styles";

const HomeStyles = styled.section`
  width: 100vw;

  h1 {
    position: fixed;
    background: white;
    padding: 0.8rem;
    top: 50%;
    left: 0;
    font-size: 14px;
    font-family: sans-serif;
    text-transform: uppercase;
    transform: translateY(-50%);
    ${media.smallDesktopAndBelow`
      padding: 8px;
    `}
  }
`;

export default HomeStyles;
