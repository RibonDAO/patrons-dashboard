import styled from "styled-components";
import { defaultBodySmBold } from "styles/typography/default";

export const HighlightedText = styled.span`
  ${defaultBodySmBold}
  color: ${({ theme }) => theme.colors.brand.primary[800]};
`;
