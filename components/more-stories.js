import PostPreview from "../components/post-preview";
import Link from "next/link";
import { useState } from "react";

export default function MoreStories({ posts }) {
  const [usedCaps, setUsedCaps] = useState([]);
  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Kalendař všech dnů</h2>
      <div className="">
        <div className="grid grid-cols-7 gap-4 px-8">
          {posts.map((post) => {
            let date_t = new Date(post.date);
            let col = " text-center rounded col-span-1 col-start-";
            col += (date_t.getDay() + 1).toString();

            return (
              <div className={col}>
                <PostPreview
                  key={post.date}
                  slug={post.slug}
                  day={post.day}
                  date={post.date}
                  quote={post.quote}
                  reflexion={post.reflexion}
                  author={post.author}
                  description={post.description}
                  preayer={post.preayer}
                  link={post.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
