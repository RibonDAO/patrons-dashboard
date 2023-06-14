import styled from "styled-components";
import {
  defaultBodyLgSemibold,
  defaultBodySmSemibold,
  defaultHeadingXxs,
} from "styles/typography/default";

export const Table = styled.table`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(20)};
  border-collapse: separate;
  border-spacing: ${({ theme }) => theme.spacing(4)};
`;

export const LeftLabel = styled.td`
  ${defaultBodySmSemibold};
  
  color: ${({ theme }) => theme.colors.neutral[600]};
}
`;

export const RightLabel = styled.td`
  ${defaultBodyLgSemibold};
`;

export const TotalLabel = styled.td`
  ${defaultHeadingXxs};
`;

export const Divider = styled.hr`
  margin: ${({ theme }) => theme.spacing(8, 0, 8, 0)};
  border-color: ${({ theme }) => theme.colors.neutral[300]};
}
`;
