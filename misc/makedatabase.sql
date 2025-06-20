/* this set of queries will create the default tables for the week 8 assignment */
/* Tables are for the personal blog application*/
/* suitable to run on existing tables to reset back to default, erasing any test comments  */

CREATE TABLE IF NOT EXISTS blog_content (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(25) NOT NULL,
    imgsrc VARCHAR(255) NOT NULL,
    blogtext text NOT NULL
);


/*
CREATE TABLE IF NOT EXISTS blog_comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(255),
    text VARCHAR(300),    
    blogid INT REFERENCES blog_content (id) NOT NULL
);

this failed I'm sure I defined foreign like this last week
*/

CREATE TABLE IF NOT EXISTS blog_comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(255),
    text VARCHAR(300),    
    blogid INT REFERENCES blog_content (id)    
);



/* reset tables */
TRUNCATE TABLE blog_comments,blog_content RESTART IDENTITY;
/*
ALTER SEQUENCE blog_comments RESTART WITH 1;
ALTER SEQUENCE blog_content RESTART WITH 1;
*/

INSERT INTO blog_content (title,imgsrc,blogtext) VALUES ('Blog 1','image1','Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.');
INSERT INTO blog_content (title,imgsrc,blogtext) VALUES ('Blog 2','image2','Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.');
INSERT INTO blog_content (title,imgsrc,blogtext) VALUES ('Blog 3','image3','Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.');
INSERT INTO blog_content (title,imgsrc,blogtext) VALUES ('Blog 4','image4','Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.');
INSERT INTO blog_content (title,imgsrc,blogtext) VALUES ('Blog 5','image5','Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.');


