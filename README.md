# LoginSample - Angular JS Single Page Application with JWT Authentication 
Sample application to demo Login module with following features using JWT authentication.
1. User Registration
2. Login
3. Profile Edit 


## Where is the backend APIs?
It is there in [Spring MVC Sample](https://github.com/vworld4u/springmvcsample) repository. Check it out.

## Setup
Please run `npm install` to do all the dev dependencies as well as bower components installation. You can use `yarn` too.

## How can run this application?
Ideally it should be packaged as a dist folder with minified javascript and assets along with an index.html which can be exported into your favorite HTTP server like **NGINX**/**Apache HTTP Server** to serve the application. Since I have started developing this application, I haven't tested this packaging yet! I will check and fix if it is failing (soon!).
Till then you can always run the application in dev mode using the command `gulp serve`. This will start the application in dev mode with live reloading enabled!


## How does the UI application points to API server?
Good Question! It is currently inside a gulp task file `gulp/server.js` which has proxyMiddleware declarations. It currently points to `http://localhost:8080` and this approach is not-scalable. I will fix it soon. If you change these settings, you need to stop the gulp and start `gulp serve` again!
