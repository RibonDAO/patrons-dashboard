import React, { CSSProperties, useCallback, useRef } from "react";
import { theme } from "@ribon.io/shared/styles";
import * as S from "./styles";

export type Props = {
  name: string;
  label?: string;
  values: any[];
  defaultValue?: any;
  onOptionChanged?: (value: any) => void;
  valueText?: (value: any) => string;
  customInputStyles?: CSSProperties;
  containerId?: string;
  disabled?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
};

function Dropdown({
  name,
  label,
  values,
  onOptionChanged,
  defaultValue,
  valueText,
  containerId = "dropdown-container",
  customInputStyles = {},
  disabled = false,
  placeholder,
  isSearchable = false,
}: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const valueToText = (value: any) => {
    if (valueText && value) return valueText(value);

    return value;
  };

  const formattedValues = useCallback(
    () => values.map((value) => ({ value, label: valueToText(value) })),
    [values],
  );

  const handleOptionClick = (value: string) => {
    if (onOptionChanged) onOptionChanged(value);
  };

  const inputStyles = () => {
    if (disabled)
      return {
        color: theme.colors.neutral[400],
        borderColor: theme.colors.neutral[300],
        backgroundColor: theme.colors.neutral[50],
      };

    return customInputStyles;
  };

  return (
    <S.Container id={containerId} ref={containerRef}>
      <S.SelectInput
        aria-label={label}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        isDisabled={disabled}
        options={formattedValues()}
        onChange={(option: any) => handleOptionClick(option.value)}
        isSearchable={isSearchable}
        styles={{
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
            ":focus": {
              borderColor: theme.colors.neutral[600],
              boxShadow: "none",
            },
            ...inputStyles(),
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
            padding: 10,
            height: 48,
          }),
        }}
      />
    </S.Container>
  );
}

export default Dropdown;
