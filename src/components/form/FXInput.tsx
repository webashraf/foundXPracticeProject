"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
interface IProps {
  type?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  label: string;
  name: string;
}
const FXInput = ({
  type = "text",
  variant = "bordered",
  size = "md",
  required = false,
  label = "",
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      type={type}
      label={label}
      variant={variant}
      size={size}
      required={required}
    />
  );
};

export default FXInput;
