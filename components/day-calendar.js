import { useRouter } from "next/router";

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

  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Konkrétní den</h2>
      <div className="px-8">
        <select
          name="day"
          onChange={(e) => {
            router.push("/day/" + e.target.value);
          }}
          className="text-black w-full border-2 border-black rounded h-10"
        >
          <option value="/" className="text-grey-light">
            vyber den
          </option>
          {posts.map((post) => {
            let date_t = new Date(post.date);

            let doCapital = true;
            if (posts.indexOf(post) > 0) {
              let monthFirst = new Date(posts[posts.indexOf(post) - 1].date);
              doCapital = !(monthFirst.getMonth() === date_t.getMonth());
            }
            return (
              <option value={post.slug}>
                {days[date_t.getDay()] +
                  " " +
                  date_t.getDate().toString() +
                  ". " +
                  months[date_t.getMonth()]}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
