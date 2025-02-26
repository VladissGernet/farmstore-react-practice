import React from 'react';

import { VisuallyHiddenInput } from '/src/components/styled';

import { StyledLabel, StyledText } from './styled';

const Checkbox = ({
  labelComponent = StyledLabel,
  textComponent = StyledText
}) => {
  const Label = labelComponent;
  const Text = textComponent;

  return (
    <Label>
      <VisuallyHiddenInput type="checkbox" />
      <Text>Checkbox</Text>
    </Label>
  );
};

export { Checkbox };
