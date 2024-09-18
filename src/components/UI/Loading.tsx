import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center fixed inset-0 backdrop-blur-md z-30">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
