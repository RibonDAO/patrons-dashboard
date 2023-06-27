import styled from "styled-components";
import { defaultBodyMdRegular } from "styles/typography/default";
import Select, { StylesConfig } from "react-select";
import { theme } from "@ribon.io/shared/styles";

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

export const selectInputStyles: StylesConfig = {
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  control: (styles) => ({
    ...styles,
    borderRadius: 4,
    boxShadow: "none",
    borderColors: theme.colors.neutral[300],
    ":hover": {
      borderColor: theme.colors.neutral[600],
      boxShadow: "none",
    },
    ":focus-within": {
      borderColor: theme.colors.neutral[600],
      boxShadow: "none",
    },
  }),
  option: (base, { isSelected }) => ({
    ...base,
    "&:hover": {
      borderColor: "#CCCCCC",
      background: theme.colors.neutral[50],
      cursor: "pointer",
    },
    color: theme.colors.neutral[900],
    fontWeight: 400,
    background: isSelected ? theme.colors.neutral[50] : "#FFFFFF",
    margin: 0,
    height: 48,
  }),
};
