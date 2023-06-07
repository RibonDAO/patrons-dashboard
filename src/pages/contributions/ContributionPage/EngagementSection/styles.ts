import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(24)};
`;

export const DataContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;

export const TooltipCardContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(16)};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  width: calc(100% + 32px);
  margin-left: -16px;
  background-color: ${({ theme }) => theme.colors.brand.tertiary[25]};
  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: calc(100% + 64px);
    margin-left: -32px;
  }
`;

export const InnerCardContainer = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(24)};
  padding-bottom: ${({ theme }) => theme.spacing(24)};
  padding-left: ${({ theme }) => theme.spacing(16)};
  padding-right: ${({ theme }) => theme.spacing(16)};

  @media (min-width: ${({ theme }) => theme.breakpoints.pad}) {
    padding: 0;
  }
`;

export const SubtitleContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing(18)};
  word-wrap: break-word;
  width: 280px;
}
`;
