import Link from "next/link";

export default function Feedback() {
  return (
    <div>
      <Link href="https://forms.gle/sRGxs89o6F8HfJym7">
        <a className="uppercase bg-blue text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
          formluář
        </a>
      </Link>
    </div>
  );
}
