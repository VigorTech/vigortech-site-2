import { PostCard } from "./PostsCard/page";

export function Posts() {
  return (
    <div className="mx-auto w-full ">
      <h1 id="title" className="text-title text-5xl text-center">
        POSTS LINKEDIN
      </h1>
      <div id="cards" className="mx-auto  ">
        <PostCard />
      </div>
    </div>
  );
}
