/**
 * Render date in czech format
 * @param {*} dateString format YYYY-MM-DD (example: 2022-12-01)
 * @returns DD. MM. YYYYY
 */
export default function RenderDate({ dateString, className }) {
  const date = new Date(dateString);
  const out = `${date.getDate()}. ${
    date.getMonth() + 1
  }. ${date.getFullYear()}`;
  return <span className={className}>{out}</span>;
}