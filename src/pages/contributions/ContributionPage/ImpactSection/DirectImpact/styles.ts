import styled from "styled-components";
import {
  defaultBodyLgSemibold,
  defaultBodySmRegular,
} from "styles/typography/default";

export const DirectImpactSectionTitle = styled.h1`
  ${defaultBodyLgSemibold}

  margin-top: ${({ theme }) => theme.spacing(32)};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const DirectImpactSectionSubtitle = styled.h1`
  ${defaultBodySmRegular}

  margin-bottom: ${({ theme }) => theme.spacing(16)};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const ImpactCardsContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(24)};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: ${({ theme }) => theme.spacing(16)};
    column-gap: ${({ theme }) => theme.spacing(16)};
  }
`;
