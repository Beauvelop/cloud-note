'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
// const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config');

// const config = require('./config.json'); //dallin

const app = module.exports = express();

app.use(express.static(__dirname + '/public'));

//************Debug & verify User *****************/

var logQuery = function(req, res, next) {
  // console.log("req.path", req.path);
  // console.log("req.query", req.query);
  // console.log("req.body", req.body);
  next();
}

app.use(bodyParser.json());



/* session */
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));


app.use(passport.initialize());
app.use(passport.session());


/***********DATABASE***************************************/

/************THIS WORKS****************************/
const massiveInstance = massive.connectSync({
  connectionString: process.env.MASSIVE_URI || config.massive_uri
});
/**************************************************/

app.set('db', massiveInstance);
const db = app.get('db');


/* Controllers must go AFTER app.set('db', .......) */

// function userLoggedin(req, res, next) {
//   if (req.session.user) {
//     console.log("REQ.SESSION.USER: ", req.session.user);
//     next()
//   } else {
//     res.status(422).send('user not logged in');
//   }
// }



app.use(logQuery);
//**********************************************/


/* AUTH0 SETUP  HERE*/



//************ XXX ENDPOINTS XXX *******************//
const getcontroller = require('./nodecontrollers/getCtrl');
const postcontroller = require('./nodecontrollers/postCtrl');
// const putcontroller = require('./nodecontrollers/putCtrl');
// const deletecontroller = require('./nodecontrollers/postCtrl');


//************ XXX ENDPOINTS XXX *******************//

app.post('/api/addMobileNote', logQuery, postcontroller.createMobileNote);
//
app.get('/api/mobileSearchResults/:srchTerm', logQuery, getcontroller.mobileSearchResults);

app.get('/api/getSingleNote/:id', logQuery, getcontroller.mobileSingleNoteResults);

// app.post('/api/addMobileVidlink', postcontroller.createMoblieLinks)
// --adds ONLY a single vidlink on mobile

// app.post('/api/addMobileTags', postcontroller.createMoblieTags)
// --adds ONLY a single tag on mobile
app.get('/api/getMobileNote', getcontroller.getMobileNote)



app.listen(config.port, function() {
  console.log(`Express is running on ${config.port}`)
});



/*XXX AUTH- SETUP */
/////////////////

passport.use(new Auth0Strategy(config.authConfig, (accessToken, refreshToken, extraParams, profile,
  done) => {
  // console.log("***PROFILE: ", profile)

  db.getUserByAuthId([profile.id], function(err, result) { //cb to execute after return from Auth0 (i.e. find user in DB)
    // console.log('first')
    if (err) {
      console.error(err)
    };
    var user = result[0];
    if (!user) { //if there isn't one, will create
      db.createUserByAuth([
        profile.displayName,
        profile.id
      ], (err, result) => {
        if (err) {
          console.error(err)
        } else {
          console.log('new user created')
          db.getUserByAuthId([profile.id], function(err, result) {
            console.log('second')
            if (err) {
              console.error(err)
            } else {
              return done(err, result)
            }
          })
        }
      })
    } else { //once user is found, return
      return done(err, result);
    }
  })
}));
//Create the deserialize/serializer methods on passport. Since we won't be doing anything further than just passing objects to/from passport and the session, we just need bare bones methods here:
passport.serializeUser((userA, done) => {
  done(null, userA); //PUTS 'USER' ON THE SESSION
});
passport.deserializeUser((userB, done) => {
  var user = userB;
  done(null, user); //PUTS 'USER' ON REQ.USER
});
//PASSPORT AND AUTH0 ENDPOINTS
app.get('/api/auth', passport.authenticate('auth0')); //initiates auth0 for user
app.get('/api/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/#!/start',
  failureRedirect: '/#!/home' //Behavior for first-time-logins -- **NEEDS TO BE A SEPARATE PAGE, WITH THE WAY MY RESOLVES ARE CURRENTLY SET UP?
})); // defines what happens after authentication
app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.redirect('/')
});


//AUTH0 SETUP XXX //



//*************************PREVIOUSLY COMMENTED OUT****************/

// app.get('/api/note', function(req, res) {

//
// if (!title) {
//   console.log("In the if");
//   db.get_note(function(err, notes) {
//     res.send({
//       notes: notes
//     })
//   })
// } else {
//   db.get_notes_by_title([title], function(err, notes) {
//     console.log("in notes");
//     res.send({
//       notes: notes
//     })
//   })
// }
// });

// app.post('/api/notes', postcontroller.createNote);


/*-------------------*/


// app.get('/api/db', getController.entireDB);
// app.get('/api/users', getController.allUsers);
// app.get('/api/notes', getController.allNotes);
// app.get('/api/bag', getController.allBags);
// app.get('/api/report', getController.allreport);
// app.get('/api/tags', getController.allTags);


/*-------------------*/



// const db = massive.connectSync({
//   connectionString: 'postgres://qitcebls:wNPWW8n3b-7ELfdFy3CLZCxcszNybbcK@babar.elephantsql.com:5432/qitcebls'
// })

// QUESTION: What is the diff between this code and above code?
