import MonthDates from "../components/month-dates";

export default function DayCalendar({ posts }) {

  let month_tmp = 0;
  let data = new Array;
  data.push(new Array);
  let ind = 0;

  for (let i = 0; i < posts.length; i++) {
    let date_tmp = new Date(posts[i].date);
    // create a new node
    if (month_tmp != date_tmp.getMonth()) {
      month_tmp = date_tmp.getMonth();
      data.push(new Array);
      ind++;
    }
    data[ind].push(posts[i]);
  }

  console.log(data);

  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Přejít na konkrétní den</h2>
      {data.map((part) => {
        let date_m = new Date(part[0].date);
        let mon = date_m.getMonth();
        return (
          <div key={date_m}>
            <MonthDates posts={part} month={mon} />
          </div>
        )
      })}
    </section>
  )

}
