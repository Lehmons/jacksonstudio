// ***********************************
// Row
// ***********************************

import styled from "styled-components";
import { media } from "../Styles";
import { motion } from "framer-motion";

const RowStyles = styled(motion.section)`
  display: flex;
  flex-wrap: nowrap;

  .shape {
    flex-shrink: 0;
  }

  &.is-5 .shape {
    width: 20vw;
    height: 20vw;
  }

  &.is-4 .shape {
    width: 25vw;
    height: 25vw;
  }

  &.is-3 .shape {
    width: 33.3vw;
    height: 33.3vw;
  }

  &.is-2 .shape {
    width: 50vw;
    height: 50vw;
  }
`;

export default RowStyles;
