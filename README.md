
# Frontend Developer Test

This is my answer version of the developer test which can be found here:


# Installation
Installation requires node.js on your computer

`npm install`

`node server.js`

# Updates and Transpiling
This build uses Babel, which allows for unsupported future javascript to be transformed into javascript that today's browsers can read. This is done also to allow for cleaner, more modular, code that uses true classes instead of iffys and closure design patterns.

At this point in time, there are no watchers on file changes, so webpack must be gulped for new changes in the code.

`gulp webpack`

# FAQ
### What URL should be used to access your application?
 If running, you can view this application at http://localhost:8888

### What libraries did you use to write your application?
  react.js, babel.js, gulp.js, webpack.js

### What influenced the design of your user interface?
  I wanted something simplistic and familiar to people, so I decided to model it off of the spotify

### What steps did you take to make your application user friendly?
 I presented it to users for UAT feedback. Typically I'll make my applications work on mobile first and expand out words to tablet and desktop.

### What steps did you take to insure your application was secure?
 I went ahead and added basic javascript web tokens since the initial pass of authentication is minimal.

### What could be done to the front end or back end to make it more secure?
 Ideally a more sophisticated system would be such as an OAuth or a third party two factor authentication system.
