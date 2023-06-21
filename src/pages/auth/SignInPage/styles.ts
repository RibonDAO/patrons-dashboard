import styled from "styled-components";
import { stylizedDisplayXs } from "styles/typography/stylized";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(16)};
  padding-right: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 328px;
  }
`;

export const FormContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(8, 0)};
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(8)};
  border: 1px solid ${({ theme }) => theme.colors.brand.primary[300]};
  border-radius: 8px;
`;

export const FooterText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[500]};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.brand.primary[300]};
  }
`;

export const RibonLogo = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing(40)};
`;

export const WelcomeText = styled.h1`
  ${stylizedDisplayXs}
  color: ${({ theme }) => theme.colors.brand.primary[900]};
  margin-bottom: ${({ theme }) => theme.spacing(24)};
`;
