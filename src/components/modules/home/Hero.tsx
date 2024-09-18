import { Input } from "@nextui-org/input";

import { SearchIcon } from "../../icons";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-screen bg-cover bg-no-repeat bg-center bg-[url('/magnifying-glass-confused.jpg')]">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form action="" className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-200" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
