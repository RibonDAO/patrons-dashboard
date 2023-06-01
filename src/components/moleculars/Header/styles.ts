import styled from "styled-components";
import {stylizedDisplayLg, stylizedDisplaySm} from "styles/typography/stylized";

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(16)};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.h6`
  ${stylizedDisplayLg};
  margin-top: ${({ theme }) => theme.spacing(16)};
  color: ${({ theme }) => theme.colors.neutral[800]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${stylizedDisplaySm}
  }
`;
