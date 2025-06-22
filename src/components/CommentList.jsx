import { db } from "@/../utils/dbConnection";
import Link from "next/link";

export default async function CommentList(props) {
  const blogid = props.blogid;
  const query = await db.query(
    `SELECT * FROM blog_comments WHERE blogid = $1 ORDER BY id DESC`,
    [blogid]
  );
  const data = query.rows;

  // do not render if the row count is 0 a non 0 value will evaluate at true
  return query.rowCount ? (
    <>
      <section className="border-2 p-2 mt-3 rounded-b-2xl">
        {data.map((comment) => (
          <Link
            key={comment.id}
            href={`/${blogid}/${comment.id}/`}
            className="flex p-2 m-2 gap-2 text-xs border-2 rounded-b-2xl "
          >
            <p>{comment.username} Commented:</p>
            <p>{comment.text}</p>
          </Link>
        ))}
      </section>
    </>
  ) : (
    <></>
  );
}
