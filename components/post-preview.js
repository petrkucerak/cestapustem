import Link from "next/link";

export default function PostPreview({ day, date, slug }) {
  return (
    <div className="">
      <Link as={`/day/${slug}`} href="/day/[slug]">
        <a className="">
          {day}
        </a>
      </Link>
    </div>
  );
}
