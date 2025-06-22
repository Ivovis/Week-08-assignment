"use server";
import { db } from "@/../utils/dbConnection.js";
import Link from "next/link";

export default async function BlogList({ invert }) {
  const flip = await invert;
  console.log("invert?", flip);
  const query = flip
    ? await db.query(`SELECT * From blog_content ORDER BY id DESC`)
    : await db.query(`SELECT * From blog_content`);
  const data = query.rows;

  // console.log("BlogList:", data);

  return (
    <>
      <ul className="h-[10rem] w-[20rem] p-1 overflow-hidden overflow-y-auto">
        {data.map((blog) => (
          <li key={blog.id}>
            <Link href={`/${blog.id}`}>{blog.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
