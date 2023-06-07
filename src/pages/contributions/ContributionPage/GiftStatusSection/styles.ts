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
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(16)};
  }
`;

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(24)};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(112)};
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.pad}) {
    margin-bottom: ${({ theme }) => theme.spacing(0)};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(16)};
    align-items: flex-start;
  }
`;

export const TitleContainer = styled.div`
  flex-shrink: 0;
`;

export const DataContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  * {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.pad}) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing(24)};
    align-items: flex-start;
  }
`;
