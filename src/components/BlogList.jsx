"use server";
import { db } from "@/../utils/dbConnection.js";
import Link from "next/link";

export default async function BlogList({ invert }) {
  const flip = await invert;

  const query = flip
    ? await db.query(`SELECT * From blog_content ORDER BY id DESC`)
    : await db.query(`SELECT * From blog_content`);
  const data = query.rows;

  // console.log("BlogList:", data);

  return (
    <>
      <div className="h-[10rem] p-1 overflow-hidden overflow-y-auto">
        {data.map((blog) => (
          <p key={blog.id} className=" text-center">
            <Link href={`/${blog.id}`}>{blog.title}</Link>
          </p>
        ))}
      </div>
    </>
  );
}
