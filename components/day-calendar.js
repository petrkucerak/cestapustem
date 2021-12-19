import PostPreview from "./post-preview";
import Link from "next/link";
import { useState } from "react";

export default function DayCalendar({ posts }) {
  const [usedCaps, setUsedCaps] = useState([]);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Jiný den</h2>
      <div className="">
        <div className="grid grid-cols-7 gap-4 px-8">
          {posts.map((post) => {
            let date_t = new Date(post.date);

            let col = (date_t.getDay() + 1).toString();
            let format = `text-center rounded border-2 col-start-${col} col-end-${col}`;
            // console.log(post.date + " " + days[date_t.getDay()]);

            let doCapital = true;
            if (posts.indexOf(post) > 0) {
              let monthFirst = new Date(posts[posts.indexOf(post) - 1].date);
              doCapital = !(monthFirst.getMonth() === date_t.getMonth());
              console.log("Mont is: ", date_t.getMonth());
            }

            return (
              <div className={format}>
                {doCapital && <span className="">{date_t.getMonth()}</span>}
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
