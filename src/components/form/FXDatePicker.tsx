import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";
import { IInput } from "./form.types";

const FXDatePicker = ({ label, name, variant = "bordered" }: IInput) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field: { value, ...fields } }) => (
          <DatePicker
            {...fields}
            variant={variant}
            className="min-w-full w-[300px]"
            size="sm"
            label={label}
          />
        )}
      />
    </div>
  );
};

export default FXDatePicker;
