import styled from "styled-components";

export const Container = styled.div`
  padding-left: 228px;
  padding-right: 228px;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-left: 16px;
    padding-right: 16px;
    }
`;
