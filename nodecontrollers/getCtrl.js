const app = require('./../server');
const db = app.get('db');


module.exports = {
  mobileSingleNoteResults: function(req, res, next) {
    db.get_single_mobile_note([req.params.id],
      function(err, everything) {
        console.log(everything);
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        res.status(200).send(everything);
      })
  },
  mobileSearchResults: function(req, res, next) {
    // console.log("THE REQ.USER[0].user_id", req.user[0].user_id);
    // console.log('SRCHTRM in CTRL: ', req.params.srchTerm); //confirmed
    // console.log('req.user.user_id in CTRL: ', req.user.user_id); //FIXME: UNDEFINED
    db.get_mobile_tag_search([req.user[0].user_id, req.params.srchTerm],
      function(err, everything) {
        console.log("This is everything: ", everything);
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        res.status(200).send(everything);
      })
  },
  getMobileNote: function(req, res, next) {

    db.get_mobile_note(function(err, everythings) {
      res.send({
        everything: everythings
      });
    })
  },
  entireDB: function(req, res, next) {
    db.get_everything(function(err, everythings) {
      res.send({
        everything: everythings
      });
    })
  },
  allUsers: function(req, res, next) { //all users
    db.get_users(function(err, everythings) {
      res.send({
        everything: everythings
      });
    })
  },
  allNotes: function(req, res, next) {
    db.get_note(function(err, notes) {
      res.send({
        notes: notes
      });
    })
  },
  allBookbags: function(req, res, next) { //all bkbags
    db.get_bookbag(function(err, bookbag) {
      res.send({
        bookbag: bookbag
      });
    })
  },
  allReportcards: function(req, res, next) { //all reports
    db.get_reportcard(function(err, reportcard) {
      res.send({
        reportcard: reportcard
      });
    })
  },
  allTags: function(req, res, next) { //all tags
    db.get_tag(function(err, tags) {
      res.send({
        tags: tags
      });
    })
  },



  // index: function(req, res, next) {
  //   if (req.query.genre) {
  //     var filteredShows = shows.filter(function(show) {
  //       return show.genre === req.query.genre;
  //     });
  //     return res.status(200).json(filteredShows);
  //   } else if (req.query.title) {
  //     var filteredShows = shows.filter(function(show) {
  //       return show.title === req.query.title;
  //     });
  //     return res.status(200).json(filteredShows);
  //   } else {
  //     res.status(200).json(shows) //if query is empty return all
  //   }
  // },
}
