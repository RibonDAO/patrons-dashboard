import styled from "styled-components";

export const ImpactContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(32)};
  margin-bottom: ${({ theme }) => theme.spacing(24)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
