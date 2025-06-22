import { redirect } from "next/navigation";
import { db } from "@/../utils/dbConnection";

export default async function DeleteComment({ params }) {
  const data = await params;

  // submit handler to do the sql query to delete from comments where id=comid and email= the email form the form below
  async function handleSubmit(formData) {
    "use server";

    // get the data, left in this format for future expansion of this form into a full editor
    formData = {
      email: formData.get("email"),
    };

    const result = await db.query(
      `DELETE FROM blog_comments WHERE id = $1 AND email = $2`,
      [data.comid, formData.email]
    );

    // only revalidate path if deleted the comment
    if (result.rowCount === "0") {
      revalidatePath(`/{data.blogid}`);
    }

    redirect(`/${data.blogid}`);
  }

  return (
    <>
      <div>
        <form action={handleSubmit} className="p-2 mt-5 border-2 rounded-t-2xl">
          <legend className="m-2">Enter email to delete post</legend>
          <hr />
          <section className="flex flex-col md:flex-row">
            <div className="m-2 text-center">
              <input
                type="email"
                name="email"
                maxLength="250"
                className=" m-2 p-2 border-2 rounded-md h-10"
              />
            </div>
          </section>
          <section className=" pt-3 grid">
            <div className="text-center">
              <button
                type="submit"
                className="p-2 m-2 w-50 bg-fuchsia-100 border-2 rounded-md "
              >
                delete
              </button>

              <button
                type="cancel"
                className="p-2 m-2 w-50 bg-fuchsia-100 border-2 rounded-md "
              >
                Cancel
              </button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
