import Link from "next/dist/client/link";
export default function Navigation() {
  /**
   * Return date in the slug format as /day/YYYY-MM-DD
   * @param {*} date
   * @returns
   */
  function generateSlugFromDate(date) {
    let month = date.getMonth() + 1;
    return `/day/${date.getFullYear()}-${month
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}/`;
  }

  const today = new Date();
  let tmp = new Date();
  const yestarday = new Date(tmp.setDate(tmp.getDate() - 1));
  const tomorrow = new Date(tmp.setDate(tmp.getDate() + 2));
  const limit = new Date("2022-04-17");
  let status = "";
  if(today.getTime()>=limit.getTime()) status = "hidden";

  return (
    <div className={status}>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Číst text</h2>
      <div className="mx-8 flex flex-wrap justify-start flex-row">
        <Link href={generateSlugFromDate(yestarday)}>
          <a className="uppercase bg-blue text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
            včera
          </a>
        </Link>
        <Link href={generateSlugFromDate(today)}>
          <a className="uppercase bg-yellow text-grey duration-200 hover:text-white hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
            dnes
          </a>
        </Link>
        <Link href={generateSlugFromDate(tomorrow)}>
          <a className="uppercase bg-blue text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
            zítra
          </a>
        </Link>
      </div>
    </div>
  );
}
