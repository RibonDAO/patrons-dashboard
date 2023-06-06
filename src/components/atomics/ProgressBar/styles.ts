import styled from "styled-components";
import { defaultBodyXsSemibold } from "styles/typography/default";

export const Container = styled.div<{
  backgroundColor?: string;
}>`
  width: 100%;
  height: 12px;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: flex-start;
  text-align: center;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.neutral[100]};
`;

export const Text = styled.p`
  ${defaultBodyXsSemibold}

  width: 100%;
  position: absolute;
  right: ${({ theme }) => theme.spacing(8)};
  line-height: 12px;
  text-align: right;
  color: ${({ theme }) => theme.colors.neutral10};
`;

export const Progress = styled.div<{ progress: number; color?: string }>`
  width: ${({ progress }) => progress}%;
  height: 12px;
  border-radius: 4px;
  position: absolute;
  background-color: ${(props) =>
    props.color || props.theme.colors.brand.primary[500]};
`;
