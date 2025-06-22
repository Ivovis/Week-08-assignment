import { db } from "../../utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewComment(props) {
  const blogid = props.blogid;

  console.log("=========================", typeof blogid);

  async function handleSubmit(formData) {
    "use server";

    // get the data
    formData = {
      name: formData.get("name"),
      email: formData.get("email"),
      comment: formData.get("comment"),
    };

    // insert
    await db.query(
      `INSERT INTO blog_comments (username,email,text,blogid) VALUES ($1,$2,$3,$4)`,
      [formData.name, formData.email, formData.comment, blogid]
    );

    revalidatePath(`\{blogid}`);

    // look this is where I would rediect if I was on a different page
    // this is not appropiate in this instance because we are already on the correct page
    // I have used redirects on the [blogid] page to handle invalid params values
  }

  return (
    <>
      <div>
        <form action={handleSubmit} className="p-2 border-2 rounded-t-2xl">
          <legend className="m-2">Feel free to leave a comment</legend>
          <hr />
          <section className="flex flex-col md:flex-row">
            {/* ============================ */}
            <div className="p-2">
              <label htmlFor="name" className="p-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                maxLength="20"
                required
                className="p-2 border-2 rounded-md h-10"
              />
            </div>
            {/* ============================ */}
            <div className="m-2">
              <label htmlFor="email" className="p-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                maxLength="250"
                required
                className="p-2 border-2 rounded-md h-10"
              />
            </div>
          </section>
          <section className=" pt-3 grid">
            {/* ============================ */}
            <textarea
              type="text"
              name="comment"
              maxLength="299"
              required
              className="p-3 m-2 border-2 rounded-md h-30"
            />

            <div className="flex justify-center ">
              <button
                type="submit"
                className="p-2 mt-3 m-2 w-50 bg-fuchsia-100 border-2 rounded-md "
              >
                Save
              </button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
