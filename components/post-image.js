import { Image } from "@fluentui/react";

export default function PostImage({ slug }) {
  return (
    <div className="my-5">
      <Image
        src={"/images/" + slug + ".png"}
        alt="Citat v obrazku se slovem na dnesni den!"
      ></Image>
    </div>
  );
}
