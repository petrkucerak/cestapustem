import PostPreview from "../components/post-preview";
import Link from "next/link";
import { useState } from "react";

export default function MoreStories({ posts }) {
  const [usedCaps, setUsedCaps] = useState([]);
  return (
    <section>
      <div className="flex text-center justify-between">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
          Seznam písniček:
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="">
          {posts.map((post) => {
            let doCapital = true;
            if (posts.indexOf(post) > 0) {
              doCapital = !(
                post.day[0] === posts[posts.indexOf(post) - 1].day[0]
              );
            }

            return (
              <div className={doCapital && "mt-4"}>
                {doCapital && (
                  <span className="text-4xl">{post.day[0]}</span>
                )}

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
        </ul>
      </div>
    </section>
  );
}
