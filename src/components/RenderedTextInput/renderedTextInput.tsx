import React from "react";
import TextInput from "@/src/components/Input/text";
import PasswordInput from "@/src/components/Input/password";
import { ProfileFormInputs } from "../../container/profileSetupPage";

interface RenderTextInputProps {
  name: keyof ProfileFormInputs;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "password";
  onChange: () => void;
}

const RenderTextInput: React.FC<RenderTextInputProps> = ({
  name,
  label,
  required = false,
  type = "text",
  onChange,
}) => {
  if (type === "password") {
    return (
      <PasswordInput
        name={name}
        label={label}
        required={required}
      />
    );
  }

  return (
    <TextInput
      name={name}
      label={label}
      required={required}
      type={type}
      onChange={onChange}
    />
  );
};

export default RenderTextInput;
