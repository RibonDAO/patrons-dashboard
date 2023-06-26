import React, { CSSProperties, useMemo, useRef, useState } from "react";
import ArrowDownIcon from "assets/icons/arrow-down-icon.svg";
import ModalBlank from "components/moleculars/modals/ModalBlank";
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
}: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const valueToText = (value: any) => {
    if (valueText && value) return valueText(value);

    return value;
  };

  const [dropdownValue, setDropdownValue] = useState<string>(defaultValue);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleInputClick = () => {
    if (disabled) return;

    setOptionsVisible(!optionsVisible);
  };

  const handleOptionClick = (value: string) => {
    setDropdownValue(value);
    setOptionsVisible(false);
    if (onOptionChanged) onOptionChanged(value);
  };

  const parentElement = useMemo(() => {
    if (containerRef?.current != null)
      return containerRef.current as HTMLElement;
    return document.body;
  }, [containerRef.current]);

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
      <ModalBlank
        visible={optionsVisible}
        customStyles={{
          overlay: {
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            position: "relative",
          },
          content: {
            paddingTop: 4,
            paddingBottom: 4,
            paddingRight: 0,
            paddingLeft: 0,
            position: "absolute",
            boxShadow: "0px 4px 12px 0px rgba(24, 86, 105, 0.15)",
            zIndex: 1,
            margin: 0,
            width: "100%",
            borderRadius: 4,
          },
        }}
        parentSelector={() => parentElement}
      >
        {values.map((value, index) => (
          <S.OptionContainer
            key={index.toString()}
            onClick={() => handleOptionClick(value)}
          >
            <S.OptionText>{valueToText(value)}</S.OptionText>
          </S.OptionContainer>
        ))}
      </ModalBlank>
      <S.Input onClick={handleInputClick} style={inputStyles()}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type="text"
          name={name}
          aria-label={name}
          value={valueToText(dropdownValue)}
          readOnly
          style={inputStyles()}
          disabled={disabled}
          placeholder={placeholder}
        />
        <S.ArrowIcon src={ArrowDownIcon} alt="arrow-down" />
      </S.Input>
    </S.Container>
  );
}

export default Dropdown;
