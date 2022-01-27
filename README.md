**Summary:**

This project was built using Node version v16.2 and npm version 7.23. This application is a short creating app which exposes two API's. One is a Post request (create-short-url API) and the other one is Get (get-short-url API). Post request is used to save the actual URL and generate a short URL. Get is used to retrieve that short URL back that you have saved earlier. Both endpoints are at index ‘/’.

**Guide to project:**


- Clone the project.
- Copy .env.example file and rename it to .env (make sure the values are set for variables or provide your own).
- Install all the dependencies by running “npm install”.
- To start the project run “npm run start” it will start the project.
  - To test the create-short-url API, make a POST call to the “/” (at port you have provided in .env file) and in JSON body provide “url” parameter with a correct URL as an input value otherwise it will throw an exception.
  - To test the get-short-url API, make a GET call to the “/” (at port you have provided in .env file) with providing url that was previously returned from “create-short-url API”  and you will receive the url that you provided in input if wrong url provided it will throw an exception.
- To see the test coverage run “npm run test”.
- To run tests run “npm run test:watch”.
- To build the project use “npm run build”.
- To clean the build files from dist folder run “npm run clean”.
