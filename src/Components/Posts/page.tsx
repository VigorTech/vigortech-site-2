import { PostCardFull } from "./PostsCardFull/page";
import { PostCard } from "./PostsCard/page";

export function Posts() {
  return (
    <div className="mx-auto w-full py-9 ">
      <h1 id="title" className="text-title text-5xl pb-9 text-center">
        POSTS LINKEDIN
      </h1>
      <div className="mx-auto grid  grid-cols-2 w-5/6 max-xl:grid-cols-1 max-xl:">
        <PostCardFull />
        <div
          id="simple-cards"
          className="w-full grid grid-cols-2 gap-4 max-md:grid-cols-1"
        >
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
