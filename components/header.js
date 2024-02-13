import Link from "next/link";

export default function ArticleHeader() {
  return (
    <header className="w-full">
      <nav className="mx-6 mt-6 mb-4">
        <Link href="/" className="text-3xl font-semibold underline">
          Adventní cesta
        </Link>
      </nav>
    </header>
  );
}
