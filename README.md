### A Personal Blog with comments feature

User Stories

🐿️ As a user, I want to view all posts with options to sort them in ascending or descending order so that I can easily find content based on my preferences.

🐿️ As a developer, I want to design a SQL schema that includes a posts table and a comments table, ensuring that comments are correctly associated with the corresponding post ID.

🐿️ As a user, I want to be able to delete posts using a delete button on each post’s page so that I can manage or remove my content from the database.

🐿️ As a user, I want to add comments on individual posts using a user-friendly form.

🐿️ As a user, I want to comment on posts directly on their dedicated pages so that my interactions are contextually tied to the content I view.

🐿️ As a user, I want to be automatically redirected to the posts page after creating a new post so I can immediately see my content in the context of all posts.

Requirements
🎯 Display all posts on the page, with an option to sort them in ascending or descending order.

🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key. Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.

🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.

🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).

🎯 Add a redirect when a user creates a post to redirect them to the posts page.

Reflection
Please also provide an assignment reflection in your project README.md file.

Required

🎯 What requirements did you achieve?

🎯 Were there any requirements or goals that you were unable to achieve?

🎯 If so, what was it that you found difficult about these tasks?

Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

### Checkpoint 1

A basic blog, the home screen will hold a blog description and list of existing blogs, user will be able to sort them in ascending or descending order using a discrete button.

Clicking on an individual blog title in the list will open the blog page, Here the blog will be displayed, consisting of an image component at the top, this may later have a series of images that will be displayed in sequence, for now a singular image with no frills, bellow this will be a text content of the blog, below this will be a comment form, this being a component with fields for username email and comment along with a save button, below this is a component that will display any posted comments, giving the username and comment but not the email, if a comment is selected this will open a comment edit page where the user will be able to edit or delete the comment, they will need to enter the same email as used to make the comment, this gives a simple authentication simulation.

I will include a nav bar that will hold home and full screen icons, if time I will add other pages.
I will include a footer that will just show a copyright message.

After spending too long making my wireframes last week this week I opted for an archaic method and took a picture of it.

<img src="./misc/week8wireframe.jpg" width="600" alt="a wireframe diagram of the planned application">

time for some coding ....

---

### Checkpoint 2

Again I am being haunted by last weeks assignment, I am not leaving the styling like I did back then, although I got my assignment functioning I got completely lost on the styling, So I have made a determined effort to have a presentable application this week, I have the home page 'finished' in so much as the styling is concerned, the only update here will be to the component holding the blog list, this will be a the title from each blog post and they will be links as outlined in the wireframe, I'm now going to design the tables and get the sql queries written.

---

### Checkpoint 3

At last some productive results, I spent a fair bit of time tackling an error on my table creation scripts, I wrote them out (find them in ./misc/makedatabase.sql) and eventually got them working, now looking at them a bit later I think the blogid should still be NOT NULL but I'll revisit this later, I now have a working blog without comments, the home page displays and introduction and links to the existing blogs, I have a header and footer that displays on all pages, clicking a Blog title will take you to the blog page and show you its content, one concern I have at the moment is that the home page has been created in app/page.js I suspect it would have been better to place it into its own component and kept that page a little more streamlined.

I seem to have forgotten how to handle non existent routes, I remember adding "/\*" to express, however for my \[blogid\] I check the passed in value is within range of the available rows as well as rejecting any other input, I do this by redirecting to a 404 page at app/error I have a feeling that theres a better way, but if not then I have at least demonstrated the use of redirect! although the requirement is for this to happen after a new comment has been added.

Its midday Friday so I may actually finish before the end of the day and get a weekend this week!

---
