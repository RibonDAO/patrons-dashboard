import styled from "styled-components";
import ReactModal from "react-modal";

export const BlankModal = styled(ReactModal)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(16)};
  border-radius: 16px;
  background-color: #fff;
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 360px;
  }
`;

export const Modal = styled(BlankModal)`
  button,
  a {
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    &:last-child {
      margin: ${({ theme }) => theme.spacing(0)};
    }
  }
`;
