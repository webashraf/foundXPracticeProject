import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";
import { IInput } from "./form.types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({ name, label, options, variant = "bordered" }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Select
        label={label}
        className=" w-[300px]"
        {...register(name)}
        size="sm"
        variant={variant}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FXSelect;
