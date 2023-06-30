import styled from "styled-components";
import { defaultBodySmMedium } from "styles/typography/default";

export const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: ${({ theme }) => theme.spacing(64)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    padding-right: 228px;
    padding-left: 228px;
  }

  // TODO: Update this to new breakpoints after we decide a container component in DS
  @media (min-width: 1700px) {
    padding-right: 362px;
    padding-left: 362px;
  }

  @media (min-width: 2000px) {
    padding-right: 552px;
    padding-left: 552px;
  }

  @media (min-width: 2300px) {
    padding-right: 682px;
    padding-left: 682px;
  }
`;

export const GiftText = styled.p`
  ${defaultBodySmMedium}

  color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const SelectContributionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(40)};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 328px;
  }
`;

export const GiftSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(24)};
`;

export const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(16)};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({ theme }) => theme.spacing(24)};
    background-color: transparent;
  }
`;

export const Divider = styled.div`
  height: 8px;
  margin: 32px -16px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: none;
  }
`;

export const BannerContainer = styled.div`
  max-width: 328px;
`;
