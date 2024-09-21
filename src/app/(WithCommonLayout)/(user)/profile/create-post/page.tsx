"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const page = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: any) => {
    const postData = {
      ...data,
      questions: data?.questions?.map((question: any) => question.value),
    };
    console.log(postData);
  };

  const handleAddAppends = () => {
    append({ name: "questions" });
  };

  return (
    <div className="h-[60vh] p-10 border rounded-2xl w-[80%] bg-gradient-to-b from-white/20 to-black/40">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-5 mb-5">
            <FXInput type="text" label="name" name="name" />
            <FXInput type="text" label="name" name="name" />
          </div>
          <div className="flex items-center gap-5">
            <FXInput type="text" label="name" name="name" />
            <FXInput type="text" label="name" name="name" />
          </div>

          <Divider className="my-5" />

          <div className="flex items-center justify-between">
            <p>Owner Validate Questions</p>
            <Button className="bg-green-600" onClick={handleAddAppends}>
              Append
            </Button>
          </div>

          {fields.map((field, index) => (
            <div key={field?.id} className="flex items-center gap-2">
              <FXInput
                type="text"
                label="Question"
                name={`questions.${index}.value`}
              />
              <Button
                className="bg-red-500"
                onClick={() => remove(index)}
              ></Button>
            </div>
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
