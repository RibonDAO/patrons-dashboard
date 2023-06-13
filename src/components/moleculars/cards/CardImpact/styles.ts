import styled from "styled-components";
import { defaultBodyXsRegular } from "styles/typography/default";

export const Container = styled.div`
  max-width: 304px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.neutral10};
`;

export const CardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(24)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: -60px;
  border-radius: 100%;
  display: block;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 4px;
  display: block;
  object-fit: cover;
`;

export const Text = styled.p`
  ${defaultBodyXsRegular}

  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const Title = styled.span`
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.colors.brand.primary[800]};
`;

export const Label = styled.span`
  ${defaultBodyXsRegular}
`;
