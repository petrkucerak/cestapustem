import Link from "next/link";

export default function Header() {
  return (
    <h2 className="mt-4 mx-8">
      <Link href="/">
        <a className="text-3xl font-bold underline hover:text-grey ease-in-out transition duration-150">
          Cesta půstem
        </a>
      </Link>
    </h2>
  );
}
