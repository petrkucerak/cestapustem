import Link from "next/dist/client/link";
import MonthDates from "../components/month-dates";

export default function DayCalendar({ posts }) {


  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Přejít na konkrétní den</h2>
      <MonthDates posts={posts} month={0} />
    </section>
  )

}
