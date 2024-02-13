import Link from "next/link";

export default function Calendar({ posts }) {
  return (
    <div className="mx-6 my-6">
      <h2 className="text-2xl font-bold uppercase mb-1">Kalendář</h2>
      {/* <h3 className="text-xl font-bold ">Listopad</h3>
      <div className="grid grid-cols-5 auto-cols-max gap-y-2">
        {posts.map((post) => {
          const date_tmp = new Date(post.date);
          if (date_tmp.getMonth() === 10)
            return <Day key={post.slug} post={post} />;
        })}
      </div> */}
      <h3 className="text-xl font-bold ">Prosinec</h3>
      <div className="grid grid-cols-5 auto-cols-max gap-y-2">
        {posts.map((post) => {
          const date_tmp = new Date(post.date);
          if (date_tmp.getMonth() === 11)
            return <Day key={post.slug} post={post} />;
        })}
      </div>
    </div>
  );
}
function Day({ post }) {
  const date = new Date(post.date);
  return (
    <Link
      id={post.slug}
      href={`/den/${post.slug}`}
      className="text-lg hover:bg-stone-300 uppercase py-2 px-4 rounded font-semibold text-center duration-200 hover:text-violet-light"
    >
      {`${date.getDate()}. `}
    </Link>
  );
}
