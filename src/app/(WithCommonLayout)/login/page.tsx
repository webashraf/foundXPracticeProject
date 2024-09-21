"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/user.provider";
import { useUserLogin } from "@/src/hooks/auth.hooks";
import { Button } from "@nextui-org/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const loginPage = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {isPending && <Loading />}
      <div className="w-1/2 mx-auto p-5 rounded-lg shadow-2xl ">
        <h3 className="text-3xl uppercase text-center mb-5">Login Page</h3>
        <FXForm onSubmit={onSubmit}>
          <div className="space-y-4 ">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <FXInput name="email" type="email" label="Email" />
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

export default loginPage;
