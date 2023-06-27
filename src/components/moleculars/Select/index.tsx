import React, { useCallback, useRef } from "react";
import { StylesConfig } from "react-select";
import * as S from "./styles";

export type Props = {
  name: string;
  label?: string;
  values: any[];
  defaultValue?: any;
  onOptionChanged?: (value: any) => void;
  valueText?: (value: any) => string;
  customInputStyles?: StylesConfig;
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
        styles={{ ...S.selectInputStyles, ...customInputStyles }}
      />
    </S.Container>
  );
}

export default Dropdown;
