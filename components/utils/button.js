import Link from "next/link";

export default function Button({ href, content, rel, target }) {
  return (
    <Link
      href={href}
      className="bg-violet-light rounded text-white px-4 py-2 font-semibold hover:scale-110 duration-200 my-4"
      rel={rel}
      target={target}
    >
      <button title={content}>{content}</button>
    </Link>
  );
}
