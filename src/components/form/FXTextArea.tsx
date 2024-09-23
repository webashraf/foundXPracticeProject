import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
import { IInput } from "./form.types";

const FXTextArea = ({ name, label, variant = "bordered" }: IInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Textarea
        {...register(name)}
        label={label}
        variant={variant}
        minRows={6}
      />
    </div>
  );
};

export default FXTextArea;
