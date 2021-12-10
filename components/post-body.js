import PostSong from "../components/post-song";

export default function PostBody({
  quote,
  source,
  reflexion,
  preayer,
  author,
  link,
}) {
  return (
    <div className="max-w-screen-lg mx-8 text-lg leading-7">
      <div className="my-5">
        <h2 className="font-bold text-2xl  mt-8">Úryvek z Bible</h2>
        <span className="text-base tracking-wider">({source})</span>
        <p className="mt-3">{quote}</p>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl mt-8 mb-3">Zamyšlení</h2>
        <p className="mb-3">{reflexion}</p>
        <span className="tracking-wider">(Autor: {author})</span>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl  mt-8 mb-3">Modlitba</h2>
        <p className="tracking-wide">{preayer}</p>
      </div>
      <PostSong link={link}></PostSong>
    </div>
  );
}
