import React, { FC } from "react";
import { Flex, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type inputType = "number" | "text" | "email";
interface ITextInput {
  key?: string;
  name: string;
  placeholder?: string;
  label?: string;
  type?: inputType;
  onChange?: (value: string | number) => void;
  required?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
}
const TextInput: FC<ITextInput> = ({
  key,
  name,
  placeholder,
  label,
  onChange,
  type,
  required = false,
  readOnly = false,
  disabled = false,
  defaultValue,
}) => {
  const { Text } = Typography;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <Flex vertical align="flex-start" className="w-full">
      {label && (
        <label
          htmlFor={name}
          style={{
            margin: "16px 0 6px 0",
            color: "#0057B7",
            fontSize: "24px",
            whiteSpace:"nowrap"
          }}
        >
          {label}
        </label>
      )}
      <Controller
        rules={{
          required: required && "This field is required",
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              id={name}
              key={key}
              {...field}
              type={type}
              readOnly={readOnly}
              disabled={disabled}
              placeholder={placeholder}
              style={{
                padding: "16px 24px",
                height: "48px",
                width: "100%",
                border: "1px solid #BDBDBD",
                borderRadius: "16px",
              }}
              onChange={(e) => {
                field.onChange(e);
                handleChange(e);
              }}
              defaultValue={defaultValue}
            />
            {fieldState.error && (
              <Text type="danger" style={{ marginTop: "5px" }}>
                {fieldState.error.message}
              </Text>
            )}
          </>
        )}
        control={control}
        name={name}
      />
    </Flex>
  );
};
export default TextInput;
