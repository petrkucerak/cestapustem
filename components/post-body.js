export default function PostBody({
  quote,
  source,
  reflexion,
  preayer,
  author,
  link,
}) {
  return (
    <div className=" ">
      <div className=" ">
        <p>{quote}</p>
        <span>{source}</span>
      </div>
      <div className=" ">
        <p>{reflexion}</p>
        <span>{author}</span>
      </div>
      <div className=" ">
        <p>{preayer}</p>
      </div>
      <div className=" ">
        <a href={link}>{link}</a>
      </div>
    </div>
  );
}
