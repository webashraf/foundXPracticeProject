"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hooks";
import registerValidationSchema from "@/src/schema/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

const page = () => {
  const { mutate: handleUserRegistration } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    console.log("inside form user data: ", userData);
    handleUserRegistration(userData);
  };
  return (
    <div>
      <div className="w-1/2 mx-auto p-5 rounded-lg shadow-2xl ">
        <h3 className="text-3xl uppercase text-center mb-5">Register Page</h3>
        <FXForm
          onSubmit={onSubmit}
          // ! Delete after complete development
          defaultValues={{
            name: "Ali Ashraf",
            email: "ali@gmail.com",
            mobileNumber: "01323521065",
            password: "123456",
          }}
          resolver={zodResolver(registerValidationSchema)}
        >
          <div className="space-y-4">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <FXInput name="name" type="text" label="Name" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <FXInput name="email" type="email" label="Email" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <FXInput name="mobileNumber" type="text" label="Phone" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <FXInput name="password" type="text" label="Password" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Button
                type="submit"
                className="bg-default-900 text-default font-semibold w-full"
              >
                Login
              </Button>
            </div>
          </div>
        </FXForm>
      </div>
    </div>
  );
};

export default page;
