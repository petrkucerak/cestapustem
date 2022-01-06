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
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Přejít na konkrétní den</h2>
      <table className="mx-8">
        <tr>
          <th>PO</th>
          <th>UT</th>
          <th>ST</th>
          <th>CT</th>
          <th>PA</th>
          <th>SO</th>
          <th>NE</th>
        </tr>
        <tr>
          {posts.map((post) => {
            let date_t = new Date(post.date);
            return (
              <td key={post.slug}>{date_t.getDate()}</td>
            )
          })}
        </tr>
      </table>
    </section>
  );
}
