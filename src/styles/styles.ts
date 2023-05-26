import styled from "styled-components";
import { Pie } from "react-chartjs-2";

export const Container = styled.div`
  padding: 24px;
  width: 256px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 16px;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  text-align: left;
  background: ${({ theme }) => theme.colors.white};
`;

export const MainText = styled.div`
  padding-bottom: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const MainValue = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Teste = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SecondaryText = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const SecondaryLeftValue = styled.div`
  color: ${({ theme }) => theme.colors.green};
`;

export const SecondaryRightValue = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Graph = styled(Pie)`
  padding: 32px 16px 0px;
`;
