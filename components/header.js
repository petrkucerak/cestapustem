import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-3xl font-bold mx-8 mt-4 underline hover:text-grey ease-in-out transition duration-150">
      <Link href="/">
        <a className="">Cesta půstem</a>
      </Link>
    </h2>
  )
}
