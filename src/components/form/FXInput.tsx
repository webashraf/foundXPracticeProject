"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
import { IInput } from "./form.types";

const FXInput = ({
  type = "text",
  variant = "bordered",
  size = "sm",
  required = false,
  label = "",
  name,
}: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      type={type}
      label={label}
      variant={variant}
      size={size}
      required={required}
      className="rounded-lg"
    />
  );
};

export default FXInput;
