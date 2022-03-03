import PostImage from "../components/post-image";
import { Link } from "@fluentui/react";
import ReactAudioPlayer from "react-audio-player";

export default function PostBody({
  quote,
  source,
  reflexion,
  preayer,
  author,
  vivit,
  vivitsource,
  slug,
}) {
  return (
    <div className="max-w-screen-lg mx-8 text-lg leading-7">
      <PostImage slug={slug}></PostImage>
      <ReactAudioPlayer
        src={`/audio/${slug}.mp3`}
        controls
      />
      <div className="my-5">
        <h2 className="font-bold text-2xl mt-8">Úryvek z Bible</h2>
        <span className="text-base tracking-wider ">({source})</span>
        <p className="mt-3 whitespace-pre-wrap leading-relaxed">{quote}</p>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl mt-8 mb-3 ">Zamyšlení</h2>
        <p className="mb-3 whitespace-pre-wrap">{reflexion}</p>
        <span className="tracking-wider">
          (Autor:{" "}
          <Link
            href={"/authors#" + author}
            className="text-blue hover:text-grey underline ease-in-out transition duration-150"
          >
            {author}
          </Link>
          )
        </span>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl  mt-8">Christus Vivit</h2>
        <span className="text-base tracking-wider">({vivitsource})</span>
        <p className="mt-3 tracking-wide whitespace-pre-wrap">{vivit}</p>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-2xl  mt-8 mb-3">Modlitba</h2>
        <p className="tracking-wide whitespace-pre-wrap leading-relaxed">{preayer}</p>
      </div>
    </div>
  );
}
