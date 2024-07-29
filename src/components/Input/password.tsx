import React, { FC, useEffect, useState } from "react";
import { Flex, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import Image from "next/image";


interface IPasswordInput {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  showRules?: boolean; // New prop for controlling the display of rules
}


const PasswordInput: FC<IPasswordInput> = ({
  name,
  placeholder,
  label,
  required = false,
  showRules = false, // Default is false, so it will not show rules unless specified
}) => {
  const { Text } = Typography;
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Flex justify="space-between" align="center">
        {label && (
          <label
            htmlFor={name}
            style={{
                margin: "16px 0 6px 0",
                color: "#0057B7",
                fontSize: "24px",
            }}
          >
            {label}
          </label>
        )}
      </Flex>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required && "This field is required",
        }}
        render={({ field, fieldState }) => (
          <>
            <Input.Password
            //   iconRender={(visible) => (
            //     <Image src={visible ? Eye : EyeOff} alt="eye" />
            //   )}
              id={name}
              {...field}
              placeholder={placeholder}
              style={{
                padding: "16px 24px",
                height: "48px",
                width: "100%",
                border: "1px solid #BDBDBD",
                borderRadius:"16px"
              }}
            />
            {fieldState.error && (
              <Text type="danger" style={{ marginTop: "5px" }}>
                {fieldState.error.message}
              </Text>
            )}
          </>
        )}
      />

    </div>
  );
};

export default PasswordInput;
