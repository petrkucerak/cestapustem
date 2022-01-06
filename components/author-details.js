import { useRouter } from "next/router";

export default function AuthorDetail({ posts }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Přehled autorů</h2>
      <div className="px-8 mb-5">
        {posts.map((post) => {
          return (
            <div key={post.author} clasName="">
              <h3 id={post.author} className="text-xl font-bold mt-4 mb-1">
                {post.author}
              </h3>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
