export default function PostSong({ link }) {
  if (link !== "") {
    return (
      <div className="my-5">
        <h2 className="font-bold text-2xl mt-8 mb-3">Jiné</h2>
        Písnička:{" "}
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue hover:text-grey underline ease-in-out transition duration-150"
        >
          {link}
        </a>
      </div>
    );
  } else return null;
}
