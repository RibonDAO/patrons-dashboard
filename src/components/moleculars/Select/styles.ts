import styled from "styled-components";
import { defaultBodyMdRegular } from "styles/typography/default";
import Select from "react-select";

export const SelectInput = styled(Select)`
  width: 100%;
  ${defaultBodyMdRegular};

  input {
    height: 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

export const OptionContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(8, 16)};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    cursor: pointer;
  }
`;

export const OptionText = styled.p`
  ${defaultBodyMdRegular}
`;

export const ArrowIcon = styled.img`
  height: 18px;
`;
