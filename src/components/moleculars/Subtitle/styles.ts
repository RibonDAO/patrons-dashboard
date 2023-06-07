import styled from "styled-components";
import { defaultBodySmMedium } from "styles/typography/default";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const Subtitle = styled.div`
  ${defaultBodySmMedium}
  color: ${({ theme }) => theme.colors.brand.tertiary[800]};
`;
export const IconBox = styled.div<{
  secondaryColor: string;
}>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) =>
    props.secondaryColor || props.theme.colors.neutral10};
`;
