import styled from "styled-components";
import {
  defaultBodyLgSemibold,
  defaultBodySmRegular,
} from "styles/typography/default";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing(32)};
`;

export const DirectImpactSectionTitle = styled.h1`
  ${defaultBodyLgSemibold}
  color: ${({ theme }) => theme.colors.neutral[800]};
  margin-top: ${({ theme }) => theme.spacing(32)};
`;

export const DirectImpactSectionSubtitle = styled.h1`
  ${defaultBodySmRegular}
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;

export const ImpactCardsContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: ${({ theme }) => theme.spacing(24)};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing(16)};
    row-gap: ${({ theme }) => theme.spacing(16)};
`;
