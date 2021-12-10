import PostPreview from "../components/post-preview";
import Link from "next/link";
import { useState } from "react";

export default function MoreStories({ posts }) {
  const [usedCaps, setUsedCaps] = useState([]);
  return (
    <section>
      <div className="">
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
                {/* {doCapital && (
                  <span className="">{post.day[0]}</span>
                )} */}

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
