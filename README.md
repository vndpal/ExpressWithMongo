# ExpressWithMongo
This is a API build on nodeJs framework Express which uses database as MongoDB


-Prerequisite: Javascript

-Software Requirements: NodeJs

-Why NodeJs <br />
    -Single Threaded Environment <br />
    -IO Intensive <br />
    -Real Time applications <br />
    -Not recommeded for high computive operations <br />


-Steps to create new NodsJs API with Express:
1. Create a new folder.
2. Navigate to the folder and run npm init.
3. Add "npm install express", this will add express in your project.
4. Create a new file name "app.js". Name can be anything, it will be your entry point to the application.
5. Import express in your app.js file.
6. Write below code in order to run the express API:<br />
    app.listen(8080,()=>{<br />
        &nbsp;&nbsp;&nbsp; console.log("server started");<br />
    });<br />
7. Run using "node app.js" where app.js is your file name.

-Routing:
1. Import express.Router() in app.js
2. Now add below code to enable routing:<br />
   app.use('testRoute',(req,res)=>{<br />
    console.log('test route called')<br />
        &nbsp;&nbsp;&nbsp; res.send("Sent the test route response")<br />
   })<br />
3. Now we can add a separate file and foler for routing.
  a. Create a new folder "routers"
  b. Create a new file with testRoute.js
  c. Import express and Router.
  d. Add below code:<br />
      router.get('/',(req,res)=>{<br />
          &nbsp;&nbsp;&nbsp;  res.send("succeeed")<br />
      })<br />
   e. In the end add "module.exports = router" without dobule quotes, its important to export the module.
   f. In app.js add below code:<br />
      const newRouter = require('./routers/newRoute')<br />
      app.use('/newRouter',newRouter)<br />
   g. This will enable the new route.

-Debugging <br />
    -Open Run and Debug option in vscode.<br />
    -Choose NodeJs as Debugging choice.<br />

-Authentication and Authorization:<br />
https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

-Database Connection:<br />
https://expressjs.com/en/guide/database-integration.html#sql-server
   
  
-Tips and Frequenty used Things:
1. Nodemon: its a npm package which will automatically refresh your API when you make any changes.
2. Cors: If you are getting CORS error then add this in app.js
      const cors = require('cors')
      app.use(cors())
3. JSON: If you are going to deal with JSON, which you will, use below:
      app.use(express.json())



