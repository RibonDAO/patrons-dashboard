import styled from "styled-components";
import {
  defaultBodyLgSemibold,
  defaultBodyMdBold,
  defaultBodyMdSemibold,
  defaultBodySmRegular,
} from "styles/typography/default";

export const Card = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(32)};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.neutral10};
`;

export const IndirectImpactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(32)};
  align-items: center;
  justify-content: flex-start;

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(16)};
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(16)};
`;

export const DataContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(40)};
`;

export const ActionsTextContainer = styled.div`
  width: 100%;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
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

export const Title = styled.h1`
  ${defaultBodyMdBold}
  span {
    ${defaultBodyMdBold}

    color: ${({ theme }) => theme.colors.brand.primary[800]};
  }
`;
export const Subtitle = styled.p`
  ${defaultBodyMdSemibold}

  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Description = styled.p`
  ${defaultBodySmRegular}
`;

export const SpamWeb = styled.h1`
  ${defaultBodyMdSemibold}

  color: ${({ theme }) => theme.colors.brand.primary[800]};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const SpamMobile = styled.h1`
  ${defaultBodyMdSemibold}

  margin-top: ${({ theme }) => theme.spacing(8)};
  display: none;
  color: ${({ theme }) => theme.colors.brand.primary[800]};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;
