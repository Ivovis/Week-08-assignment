import { db } from "@/../utils/dbConnection";
import NewComment from "@/components/NewComment";
import { redirect } from "next/navigation";
import Image from "next/image";
import image1 from "@/../public/images/image1.jpg";
import CommentList from "@/components/CommentList";

export default async function BlogIdPage({ params }) {
  //
  // get the blogid
  const paramBear = await params;
  const requestedId = paramBear.blogid;

  //=====================================================================
  // get the number of blog posts
  const countString = await db.query(`SELECT COUNT(*) FROM blog_content`);

  // convert to number
  const count = Number(countString.rows[0].count);
  // exit if the database is broken!
  if (Number.isNaN(count)) {
    redirect("/error");
  }

  //=====================================================================
  // check the requested page is 1. a number and 2. is in range else 404

  // if(requestedId === "delete")

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
  // I used the requestID here rather than the tested digitID because its already the correct type
  const query = await db.query(`SELECT * FROM blog_content WHERE id = $1`, [
    requestedId,
  ]);

  const blogData = query.rows;

  return (
    <div className="flex justify-center flex-col w-3l">
      {blogData.map((blog) => (
        <div key={blog.id}>
          <p className="p-4 text-center text-2xl">{blog.title}</p>

          {/* I gave up trying to use the name from the database in blog.imgsrc and just used a fixed image here :(  I might come back to this later  */}
          <Image
            src={image1}
            alt="scene from the game Satisfactory"
            width={500}
            height={350}
          />
          <p className="p-3 mt-2 mb-2  text-justify">{blog.blogtext}</p>
        </div>
      ))}
      <NewComment blogid={digitId} />
      <CommentList blogid={digitId} />
    </div>
  );
}
