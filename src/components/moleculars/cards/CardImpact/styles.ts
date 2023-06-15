import styled from "styled-components";
import {
  defaultBodySmRegular,
  defaultBodySmSemibold,
  defaultBodyXsRegular,
} from "styles/typography/default";

export const Container = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.neutral10};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    max-width: 400px;
  }
`;

export const CardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(24)};
  display: flex;
  flex-direction: column;
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
  min-height: 128px;
  max-height: 142px;
  border-radius: 4px;
  display: block;
  object-fit: cover;
`;

export const Text = styled.p`
  ${defaultBodyXsRegular};

  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const Title = styled.h1`
  ${defaultBodySmSemibold};
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const Label = styled.span`
  ${defaultBodySmSemibold};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

export const Description = styled.p`
  ${defaultBodySmRegular};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const DataContainer = styled.div`
  margin: ${({ theme }) => theme.spacing(8, 0, 8)};
`;
