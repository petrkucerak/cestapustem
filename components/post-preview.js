import Link from "next/link";

export default function PostPreview({ name, author, slug }) {
  return (
    <div className="">
      <Link as={`/song/${slug}`} href="/song/[slug]">
        <a className="text-3xl hover:underline text-[#0078d7]">
          {name} - {author}
        </a>
      </Link>
    </div>
  );
}
