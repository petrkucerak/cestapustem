import { CustomizerContext } from '@fluentui/utilities';
import PostTitle from '../components/post-title'

export default function PostHeader({ day, date }) {
  let date_t = new Date(date);
  return (
    <>
      <PostTitle>{day}</PostTitle>
      <div className="max-w-2xl mx-auto">{date_t.toLocaleDateString("cs")}
      </div>
    </>
  )
}
