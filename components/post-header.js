import { CustomizerContext } from '@fluentui/utilities';
import PostTitle from '../components/post-title'

export default function PostHeader({ day, date }) {
  let date_t = new Date(date);
  return (
    <>
      <PostTitle>{day}</PostTitle>
      <div className="text-blue text-2xl font-bold px-8 mb-3">{date_t.toLocaleDateString("cs")}
      </div>
    </>
  )
}
