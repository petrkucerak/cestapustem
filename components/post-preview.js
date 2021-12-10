import { getDay } from "date-fns";
import Link from "next/link";

export default function PostPreview({ day, date, slug }) {
  let date_t = new Date(date);
  return (
      <Link as={`/day/${slug}`} href="/day/[slug]">
        <a className="">
          {date_t.getDate()}
        </a>
      </Link>
  );
}
