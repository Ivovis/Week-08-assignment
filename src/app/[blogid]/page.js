import { db } from "@/../utils/dbConnection";
import { redirect } from "next/navigation";

export default async function BlogIdPage({ params }) {
  //
  // get the blogid
  const paramBear = await params;
  const requestedId = paramBear.blogid;

  //=====================================================================
  // get the number of blog posts
  const countString = await db.query(`SELECT COUNT(*) FROM blog_content`);

  // convert to number
  // const count = Number("junk"); // Check error working
  const count = Number(countString.rows[0].count);
  // exit if the database is broken!
  if (Number.isNaN(count)) {
    redirect("/error");
  }

  //   console.log("database row count:", count);

  //=====================================================================
  // check the requested page is a. a number and b. is in range else 404

  // 1st convert to number
  const digitId = Number(requestedId);

  //   console.log("param asking for:", digitId);

  // 2nd exit if not a number
  if (Number.isNaN(digitId)) {
    console.log("blog id failed: NaN");
    redirect("/error");
  }

  if (digitId < 1 || digitId > count) {
    console.log("blog id failed:", digitId, " of ", count);
    redirect("/error");
  }

  // get the blog post
  const query = await db.query(`SELECT * FROM blog_content WHERE id = $1`, [
    requestedId,
  ]);

  const blogData = query.rows;

  return (
    <>
      <h1>Blog Page</h1>
      {blogData.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
          <p>{blog.imgsrc}</p>
          <p>{blog.blogtext}</p>
        </div>
      ))}
    </>
  );
}
