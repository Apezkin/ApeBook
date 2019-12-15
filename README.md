# ApeBook
Web Applications course project

1	APEBOOK

ApeBook is a microblogging service done by me for the course Web Applications. It allows users to post 500-character long microblogs and read other users’ microblogs.

ApeBook doesn’t require logging in or any registration whatsoever, meaning anyone can post anything anonymously, but every user also has the right to remove other people’s posts, meaning the service is completely community moderated.
The whole service is hosted by Rahti-service. A link to ApeBook as well as to the source code is in the Links section.


2	DESIGN & ARCHITECTURE

The project uses Node.js as foundation. ApeBook’s frontend was done with React, which turned out to be quite easy to implement, and backend with Express, which at first was quite hard, but after finding a great tutorial video, was quite easy. The service also utilizes a Mongoose database, which is what the Express backend handles. 
The frontend and backend run on different containers in Rahti


3	INSTRUCTIONS FOR ENVIRONMENT SETUP FOR LOCALHOST

The localhost branch on GitHub should be ready for localhosting, but if it doesn’t work, the following instructions should work.

First go to expressproject folder and db.js file. Uncomment the “for local development” and comment out all the other URL handling. Also change the port to 3001 in app.js. Then start the Express and Mongoose backend and database with npm start.

After the backend has connected to the database, go to reactproject folder and go to the files NewPost, Post and Posts and change the Rahti link to http://localhost:3001/posts. Then start it with npm start.

Make sure that the backend and frontend work on two different URLs, meaning for localhosting, make sure that the URL //localhost:3000 doesn’t connect to both the frontend and backend, otherwise problems will arise. For example, if the backend used the port 3000, and you started the frontend before backend, no errors will come while starting, but when you go look at the main page, errors will arise quickly there, as react is trying to fetch data from the URL //localhost:3000, which react is using itself, meaning react is trying to fetch data from the webpage and not the database, resulting in an error. But if you start the backend before frontend, while starting the frontend, it will ask the user to change the port, resulting in a different URL and the program working fine.

