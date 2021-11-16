# ExpressWithMongo
This is a API build on nodeJs framework Express which uses database as MongoDB


Prerequisite:
-Javascript

Software Requirements:
-NodeJs

Topics:
-What is NodeJs and why are its advantages
-

Steps to create new NodsJs API with Express:
1. Create a new folder.
2. Navigate to the folder and run npm init.
3. Add "npm install express", this will add express in your project.
4. Create a new file name "app.js". Name can be anything, it will be your entry point to the application.
5. Import express in your app.js file.
6. Write below code in order to run the express API:
    app.listen(8080,()=>{
      console.log("server started");
    });
7. Run using "node app.js" where app.js is your file name.

Routing:
1. Import express.Router() in app.js
2. Now add below code to enable routing:
   app.use('testRoute',(req,res)=>{
    console.log('test route called')
    res.send("Sent the test route response")
   })
3. Now we can add a separate file and foler for routing.
  a. Create a new folder "routers"
  b. Create a new file with testRoute.js
  c. Import express and Router.
  d. Add below code:
      router.get('/',(req,res)=>{
       res.send("succeeed")
      })
   e. In the end add "module.exports = router" without dobule quotes, its important to export the module.
   f. In app.js add below code:
      const newRouter = require('./routers/newRoute')
      app.use('/newRouter',newRouter)
   g. This will enable the new route.

Authentication and Authorization:
https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

Database Connection:
https://expressjs.com/en/guide/database-integration.html#sql-server
   
  
Tips and Frequenty used Things:
1. Nodemon: its a npm package which will automatically refresh your API when you make any changes.
2. Cors: If you are getting CORS error then add this in app.js
      const cors = require('cors')
      app.use(cors())
3. JSON: If you are going to deal with JSON, which you will, use below:
      app.use(express.json())



