import Link from "next/dist/client/link";

export default function MonthDates({ month, posts }) {
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
    "leden",
    "únor",
    "březen",
    "duben",
    "květen",
    "červen",
    "červenec",
    "srpen",
    "září",
    "říjen",
    "listopad",
    "prosinec",
  ];

  function generateSlugFromDate(date) {
    let month = date.getMonth() + 1;
    return `/day/${date.getFullYear()}-${month
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}/`;
  }

  return (

    <div className="mx-8">
      <h3 className="text-base uppercase font-bold mt-4 mb-2">{months[month]}</h3>
      <div className="grid grid-cols-5 auto-cols-max gap-y-2">
        {posts.map((post) => {
          let date_t = new Date(post.date);
          let str = `${date_t.getDate()}.`;
          return (
            <Link key={post.slug} href={generateSlugFromDate(date_t)}>
              <a className="uppercase dark:text-white duration-200 hover:bg-grey-dark hover:text-white font-bold py-2 px-4 rounded text-center">
                {str}
              </a>
            </Link>
          )
        })}
      </div>
    </div>

  );
}