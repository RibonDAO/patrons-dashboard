import styled from "styled-components";
import {
  defaultBodySmBold,
  defaultBodySmRegular,
} from "styles/typography/default";

export const Text = styled.p`
  ${defaultBodySmRegular}
  color: ${({ theme }) => theme.colors.neutral[600]};
`;
export const HighlightedText = styled.span`
  ${defaultBodySmBold}
  color: ${({ theme }) => theme.colors.brand.primary[800]};
`;
