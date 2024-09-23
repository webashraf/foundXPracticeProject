"use client";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import FXTextArea from "@/src/components/form/FXTextArea";
import envConfig from "@/src/config/envConfig";
import { useUser } from "@/src/context/user.provider";
import { useGetCategories } from "@/src/hooks/categories.hook";
import { useCreatePost } from "@/src/hooks/post.hook";
import dateToISO from "@/src/utils/dateToISO";
import { allDivision } from "@bangladeshi/bangladesh-address";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const page = () => {
  const { mutate: handleCreatePost } = useCreatePost();

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const { user } = useUser();
  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categoriesData?.data && !categoryLoading) {
    categoryOptions = categoriesData?.data?.map((category: any) => ({
      key: category?._id,
      label: category?.name,
    }));
  }

  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: any) => {
    console.log("baseApi", envConfig.baseApi);

    const formData = new FormData();

    const postData = {
      ...data,
      questions: data?.questions?.map((question: any) => question?.value),
      dateFound: dateToISO(data?.dateFound),
      user: user?._id,
    };

    formData.append("data", JSON.stringify(postData));
    for (let image of imageFiles) {
      formData.append("itemImages", image);
    }

    console.log("data", formData.get("data"));
    console.log("itemImages", formData.get("itemImages"));

    handleCreatePost(formData);
  };

  const handleAddAppends = () => {
    append({ name: "questions" });
  };

  const bangladeshCities = allDivision()?.map((city: any) => ({
    key: city,
    label: city,
  }));

  const handleImageChange = (e: any) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);
    // console.log(imageFiles);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        return setImagePreview((prev: any) => [
          ...prev,
          reader.result as string,
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-[60vh] p-10 border rounded-2xl lg:w-[80%] bg-gradient-to-b from-white/20 to-black/40">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 mb-5">
            <div className="grid grid-cols-1 gap-5 flex-col lg:grid-cols-2 md:grid-cols-2">
              <FXInput type="text" label="Title" name="title" />
              <FXDatePicker label="Found Date" name="dateFound" />
            </div>
            <div className="grid grid-cols-1 gap-5 flex-col lg:grid-cols-2 md:grid-cols-2">
              <div className="w-[400px]">
                <FXInput type="text" label="Location" name="location" />
              </div>
              <FXSelect name="city" label="City" options={bangladeshCities} />
              {/* <FXInput type="text" label="City" name="city" /> */}
            </div>
            <div className="grid grid-cols-1 gap-5 flex-col lg:grid-cols-2 md:grid-cols-2">
              <FXSelect
                label="Category"
                name="category"
                options={categoryOptions}
                disabled={!categorySuccess}
              />
              <div className="flex items-center gap-5 ">
                <label
                  className="border border-gray-500 bg-gray-800 w-full p-3 rounded-lg"
                  htmlFor="image"
                >
                  Chose Image
                </label>
                <input
                  className="hidden"
                  id="image"
                  multiple
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>

            <FXTextArea label="Description" name="description" />

            <div className="flex flex-wrap gap-5">
              {imagePreview.length > 0 &&
                imagePreview.map((image) => (
                  <div
                    key={image}
                    className="border border-dashed border-gray-500 rounded-lg"
                  >
                    <Image
                      src={image}
                      className="size-48 object-cover  p-2"
                      // width={"100%"}
                      // height={100}
                      alt="Item image"
                    />
                  </div>
                ))}
            </div>
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
