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
  const months = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Konkrétní den</h2>
      <div className="grid grid-cols-7 gap-4 px-8">
        {posts.map((post) => {
          let date_t = new Date(post.date);

          let doCapital = true;
          if (posts.indexOf(post) > 0) {
            let monthFirst = new Date(posts[posts.indexOf(post) - 1].date);
            doCapital = !(monthFirst.getMonth() === date_t.getMonth());
            console.log("Mont is: ", date_t.getMonth());
          }

          return (
            // <div>
            //   {doCapital && (
            //     <li className="col-start-1 col-end-8">
            //       {doCapital && <span>{months[date_t.getMonth()]}</span>}
            //     </li>
            //   )}
            //   <li className="">
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
            
            //   </li>
            // </div>
          );
        })}
      </div>
    </section>
  );
}
