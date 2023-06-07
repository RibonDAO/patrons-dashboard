import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TitleContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(24)};
`;

export const DataContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;

export const TooltipCardContainer = styled.div`
  width: calc(100% + 32px);
  margin-top: ${({ theme }) => theme.spacing(16)};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  margin-left: -16px;
  background-color: ${({ theme }) => theme.colors.brand.tertiary[25]};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: calc(100% + 64px);
    margin-left: -32px;
  }
`;

export const InnerCardContainer = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(24)};
  padding-right: ${({ theme }) => theme.spacing(16)};
  padding-bottom: ${({ theme }) => theme.spacing(24)};
  padding-left: ${({ theme }) => theme.spacing(16)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    padding: 0;
  }
`;

export const SubtitleContainer = styled.div`
  width: 280px;
  margin-right: ${({ theme }) => theme.spacing(18)};
  word-wrap: break-word;
`;
