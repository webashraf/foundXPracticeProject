import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";
import { IInput } from "./form.types";

const FXDatePicker = ({ label, name, variant = "bordered" }: IInput) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field: { value, ...fields } }) => (
          <DatePicker
            {...fields}
            variant={variant}
            className="min-w-full "
            size="sm"
            label={label}
          />
        )}
      />
    </>
  );
};

export default FXDatePicker;
