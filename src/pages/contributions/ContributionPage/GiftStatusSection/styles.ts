import styled from "styled-components";

export const Web = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: none;
  }
`;

export const Mobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.pad}) {
    display: block;
  }
`;

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(24)};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(64)};
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.pad}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(24)};
    align-items: flex-start;
  }
`;

export const TitleContainer = styled.div`
  flex-shrink: 0;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(24)};
  align-items: center;
  justify-content: space-around;
  text-align: left;

  * {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.pad}) {
    align-items: flex-start;
  }
`;
