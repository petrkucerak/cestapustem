import Link from "next/link";

export default function PostPreview({ day, date, slug }) {
  return (
    <div className="">
      <Link as={`/day/${slug}`} href="/day/[slug]">
        <a className="text-3xl hover:underline text-[#0078d7]">
          {day}
        </a>
      </Link>
    </div>
  );
}
