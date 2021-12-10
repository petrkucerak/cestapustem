import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-3xl font-bold mx-8 mt-4 underline">
      <Link href="/">
        <a className="">Cesta půstem</a>
      </Link>
    </h2>
  )
}
