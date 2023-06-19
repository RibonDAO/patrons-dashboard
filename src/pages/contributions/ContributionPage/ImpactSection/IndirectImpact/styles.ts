import styled from "styled-components";
import {
  defaultBodyLgSemibold,
  defaultBodySmRegular,
} from "styles/typography/default";

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(32)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const IndirectImpactSectionTitle = styled.h1`
  ${defaultBodyLgSemibold}

  margin-top: ${({ theme }) => theme.spacing(32)};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const IndirectImpactSectionSubtitle = styled.h1`
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
