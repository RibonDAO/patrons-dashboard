import styled from "styled-components";
import { defaultBodySmMedium } from "styles/typography/default";

export const Container = styled.div`
  padding-left: 228px;
  padding-right: 228px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const GiftText = styled.p`
  ${defaultBodySmMedium};

  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const SelectContributionContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 328px;
  }
`;

export const Section = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({ theme }) => theme.spacing(24)};
  }
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;
