import { IItem } from "@/src/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import moment from "moment";
import Image from "next/image";

const ItemsCard = ({ item }: { item: IItem }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {item?.category ? item?.category?.name : item?.city}
        </p>
        <small className="text-default-500">
          {item?.location} /
          {moment(new Date(item?.dateFound)).format("DD MMMM YYYY")}
        </small>
        <h4 className="font-bold text-large">{item?.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl h-[270px] w-full object-cover "
          src={item?.images[0]}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
};

export default ItemsCard;
