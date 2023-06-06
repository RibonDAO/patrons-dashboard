import styled from "styled-components";
import { defaultHeadingXxs } from "styles/typography/default";

export const Title = styled.div`
  ${defaultHeadingXxs}

  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(12)};
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.div<{
  secondaryColor: string;
}>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.secondaryColor || props.theme.colors.neutral10};
`;
