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
      <h3>{months[month]}</h3>
      <div className="flex flex-wrap justify-start flex-row">
        {posts.map((post) => {
          let date_t = new Date(post.date);
          let str = `${date_t.getDate() + 1}.`;
          return (
            <Link key={post.slug} href={generateSlugFromDate(date_t)}>
              <a className="mr-4 mb-4 uppercase text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 rounded">
                {str}
              </a>
            </Link>
          )
        })}
      </div>
    </div>

  );
}