// CustomTextInput.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface CustomTextInputProps {
    style:object,
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  style,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={[styles.input,style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
});

export default CustomTextInput;
