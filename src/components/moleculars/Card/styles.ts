import styled, { css } from "styled-components";

export const Container = styled.div<{
  backgroundColor: string;
  border: boolean;
}>`
  padding: ${({ theme }) => theme.spacing(32)};
  ${(props) =>
    props.border &&
    css`
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.neutral[100]};
    `}

  border-radius: 8px;
  display: flex;
  background: ${(props) =>
    props.backgroundColor || props.theme.colors.neutral10};
`;
