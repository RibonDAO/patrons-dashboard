import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h6`
  margin: 8px 0 24px 0;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;
