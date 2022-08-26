// ***********************************
// MyModule
// ***********************************

import styled from "styled-components";
import { media } from "../Styles";

const MyModuleStyles = styled.section`
  ${media.smallDesktopAndBelow`
    
  `}
  ${media.mobileOnly`
    
  `}
`;

export default MyModuleStyles;
