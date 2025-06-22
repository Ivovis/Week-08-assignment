import { db } from "@/../utils/dbConnection";

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
      <div className="border-2 p-2 mt-3 rounded-b-2xl">
        {data.map((comment) => (
          <div key={comment.id} className="border-2 m-2 p-2 rounded-b-lg">
            <p>{comment.username} Commented:</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <></>
  );
}
