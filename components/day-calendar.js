import { useRouter } from "next/router";
import Link from "next/dist/client/link";

export default function DayCalendar({ posts }) {
  const router = useRouter();

  const days = [
    "neděle",
    "pondělí",
    "úterý",
    "středa",
    "čtvrtek",
    "pátek",
    "sobota",
  ];
  const months = [
    "ledna",
    "února",
    "březena",
    "dubena",
    "květena",
    "červena",
    "červenece",
    "srpena",
    "září",
    "října",
    "listopadu",
    "prosinece",
  ];

  function generateSlugFromDate(date) {
    let month = date.getMonth() + 1;
    return `/day/${date.getFullYear()}-${month
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}/`;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Přejít na konkrétní den</h2>
      <div className="mx-8 flex flex-wrap justify-start flex-row">
        {posts.map((post) => {
          let date_t = new Date(post.date);
          let str = `${date_t.getDate() + 1}.`;
          let doCapital = true;
          if (posts.indexOf(post) > 0) {
            let dateA = new Date(post.date);
            let dateF = new Date(posts[posts.indexOf(post) - 1].date);
            doCapital = !(
              dateA.getMonth() === dateF.getMonth()
            );
          }
          return (
            <div key={post.slug} className="mr-4 mb-4">
              {doCapital && <span className="">{months[date_t.getMonth()]}</span>}
              <Link href={generateSlugFromDate(date_t)}>
                <a className="uppercase text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 rounded">
                  {str}
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  );
}
