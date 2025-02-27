import React from 'react';

import { VisuallyHiddenInput } from '/src/components/styled';

import { StyledLabel, StyledText, CheckboxState } from './styled';

const Checkbox = ({
  labelComponent = StyledLabel,
  textComponent = StyledText,
  name,
  value,
  isChecked,
  onChange,
  children
}) => {
  const Label = labelComponent;
  const Text = textComponent;

  return (
    <Label $isChecked={isChecked}>
      <VisuallyHiddenInput
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      <CheckboxState
        $isChecked={isChecked}
      />
      <Text>
        {children}
      </Text>
    </Label>
  );
};

export { Checkbox };
