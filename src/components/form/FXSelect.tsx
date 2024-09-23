import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";
import { IInput } from "./form.types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({
  name,
  label,
  options,
  variant = "bordered",
  disabled,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Select
        {...register(name)}
        isDisabled={disabled}
        label={label}
        className=" w-full"
        size="sm"
        variant={variant}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </>
  );
};

export default FXSelect;
