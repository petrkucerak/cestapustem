export default function RenderDayNumber({ dateString, className }) {
  const date = new Date(dateString);
  const out = `${date.getDate()}.`;
  return <span className={className}>{out}</span>;
}
