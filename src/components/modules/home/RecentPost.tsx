import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { getRecentPosts } from "@/src/services/RecentPosts";

import { IItem } from "@/src/types";
import { delay } from "@/src/utils/delay";
import Container from "../../UI/Container";
import ItemsCard from "../../UI/ItemsCard";

const RecentPost = async () => {
  const items = await getRecentPosts();

  
  return (
    <Container>
      <div className="section-tile my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {items?.data.map((item: IItem) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="rounded-md bg-default-900 text-default-500"
          size="md"
        >
          <Link className="text-default" href="/found-items">
            See All
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPost;
