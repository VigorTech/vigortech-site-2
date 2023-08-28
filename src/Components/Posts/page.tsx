import { PostCardFull } from "./PostsCardFull/page";
import { PostCard } from "./PostsCard/page";

export function Posts() {
  return (
    <div className="mx-auto w-full py-9 ">
      <h1 id="title" className="text-title text-5xl pb-9 text-center">
        POSTS LINKEDIN
      </h1>
      <div className="mx-auto grid  grid-cols-2 w-5/6 max-lg:grid-cols-1">
        <PostCardFull
          title={"CATEGORY"}
          subtitle={"The Guide To Living Creatively"}
          description={
            "At half-past eight the door opened, the policeman appeared, and, requesting them to follow him, led the way to an adjoining hall. It was evidently a court-room, and a crowd of Europeans and natives already occupied the rear of the apartment."
          }
        />
        <div
          id="simple-cards"
          className="w-full grid grid-cols-2 gap-4 max-sm:grid-cols-1"
        >
          <PostCard
            title={"CATEGORY"}
            subtitle={"The Guide To Living Creatively"}
          />
          <PostCard
            title={"CATEGORY"}
            subtitle={"The Guide To Living Creatively"}
          />
          <PostCard
            title={"CATEGORY"}
            subtitle={"The Guide To Living Creatively"}
          />
          <PostCard
            title={"CATEGORY"}
            subtitle={"The Guide To Living Creatively"}
          />
        </div>
      </div>
    </div>
  );
}
