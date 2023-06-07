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
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  margin-left: -32px;
  margin-right: -32px;
`;

export const InnerCardContainer = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const SubtitleContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing(18)};
}
`;
