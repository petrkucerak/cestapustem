import Link from "next/link";

function formateDayNum(num) {
  if (num < 10) return `0${num}`;
  else return `${num}`;
}

export default function NavButtons({ posts }) {
  // const now = new Date("2022-11-28"); // testing date
  const now = new Date();
  const nowDate = `${now.getFullYear()}-${formateDayNum(
    now.getMonth() + 1
  )}-${formateDayNum(now.getDate())}`;

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  const yesterdayDate = `${yesterday.getFullYear()}-${formateDayNum(
    yesterday.getMonth() + 1
  )}-${formateDayNum(yesterday.getDate())}`;

  const tomorrow = new Date(now.setDate(now.getDate() + 2));
  const tomorrowDate = `${tomorrow.getFullYear()}-${formateDayNum(
    tomorrow.getMonth() + 1
  )}-${formateDayNum(tomorrow.getDate())}`;

  // console.log(yesterdayDate, nowDate, tomorrowDate);
  let yesterdayStatus, nowStatus, tomorrowStatus;
  yesterdayStatus = nowStatus = tomorrowStatus = "hidden";

  // console.log(tomorrowDate);

  posts.map((post) => {
    if (nowDate === post.slug) nowStatus = "";
    if (yesterdayDate === post.slug) yesterdayStatus = "";
    if (tomorrowDate === post.slug) tomorrowStatus = "";
  });
  return (
    <div className="mx-6 flex flex-row justify-around mt-6">
      <Link href={`/den/${yesterdayDate}`} className={yesterdayStatus}>
        <Button className={"bg-primary-light"}>včera</Button>
      </Link>
      <Link href={`/den/${nowDate}`} className={nowStatus}>
        <Button className={"bg-primary-dark"}>dnes</Button>
      </Link>
      <Link href={`/den/${tomorrowDate}`} className={tomorrowStatus}>
        <Button className={"bg-primary-light"}>zítra</Button>
      </Link>
    </div>
  );
}

function Button({ children, className }) {
  return (
    <button
      title={children}
      className={`uppercase rounded text-white px-4 py-2 font-semibold hover:scale-110 duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
