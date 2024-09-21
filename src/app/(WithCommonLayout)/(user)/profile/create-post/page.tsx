"use client";

import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import dateToISO from "@/src/utils/dateToISO";
import { allDivision } from "@bangladeshi/bangladesh-address";
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
      dateFound: dateToISO(data?.dateFound),
    };

    console.log(postData);
  };

  const handleAddAppends = () => {
    append({ name: "questions" });
  };

  const bangladeshCities = allDivision()?.map((city) => ({
    key: city,
    label: city,
  }));
  // [
  //   { key: "dhaka", label: "Dhaka" },
  //   { key: "chittagong", label: "Chittagong" },
  //   { key: "khulna", label: "Khulna" },
  //   { key: "rajshahi", label: "Rajshahi" },
  //   { key: "sylhet", label: "Sylhet" },
  //   { key: "barisal", label: "Barisal" },
  //   { key: "rangpur", label: "Rangpur" },
  //   { key: "mymensingh", label: "Mymensingh" },
  //   { key: "comilla", label: "Comilla" },
  //   { key: "narayanganj", label: "Narayanganj" },
  //   { key: "gazipur", label: "Gazipur" },
  //   { key: "jessore", label: "Jessore" },
  //   { key: "bogra", label: "Bogra" },
  //   { key: "natore", label: "Natore" },
  //   { key: "dinajpur", label: "Dinajpur" },
  // ];

  console.log(allDivision());

  return (
    <div className="min-h-[60vh] p-10 border rounded-2xl lg:w-[80%] bg-gradient-to-b from-white/20 to-black/40">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 mb-5">
            <div className="flex items-center gap-5 flex-col lg:flex-row">
              <FXInput type="text" label="Title" name="title" />
              <FXInput type="text" label="Description" name="description" />
            </div>
            <div className="flex items-center gap-5 flex-col lg:flex-row">
              <div className="w-[400px]">
                <FXInput type="text" label="Location" name="location" />
              </div>
              <FXSelect name="city" label="City" options={bangladeshCities} />
              {/* <FXInput type="text" label="City" name="city" /> */}
            </div>
            <div className="flex items-center gap-5 flex-col lg:flex-row">
              <FXDatePicker label="Found Date" name="dateFound" />
              <FXInput type="text" label="Category" name="category" />
            </div>
            {/* <FXInput type="text" label="" name="user" /> */}
          </div>

          <Divider className="my-5" />

          <div className="flex items-center justify-between">
            <p>Owner Validate Questions</p>
            <Button className="bg-green-600" onClick={handleAddAppends}>
              Append
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 my-5">
            {fields.map((field, index) => (
              <div key={field?.id} className="flex items-center gap-2">
                <FXInput
                  type="text"
                  label="Question"
                  name={`questions.${index}.value`}
                />
                <Button className="bg-red-500" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
