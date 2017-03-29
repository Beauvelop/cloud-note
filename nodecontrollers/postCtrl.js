const app = require('./../server');
const db = app.get('db');



module.exports = {

  createMobileNote: function(req, res, next) {
    let note = req.body;

    let appID = req.user[0].user_id;
    console.log(" POSTCTRL req.user[0]user_id: ", req.user[0].user_id);
    note.user_id = appID;
    db.create_mobile_note([
      note.user_id,
      req.body.title,
      req.body.content,
      req.body.favorite
    ], function(err, result) {

      if (err) {
        console.log("Err A", err);
        return res.status(500).send(err);
      } else {
        // console.log("here's the result", result);

        var newNote = result[0]; //here "note" is the complete note
        console.log("NEW NOTE: ", newNote.note_id);


        // NOTE: Because of "RETURNING * ;" --I have an arg for 'result' below

        db.create_mobile_links([
          req.body.vidlink,
          newNote.note_id
        ], function(err, result) {

          if (err) {
            // console.log("ERR B");
            return res.status(500).send(err)
          } else {
            // console.log("here's the result", result);
            // res.send(result)
            console.log("TAG1", req.body.tag1);
            db.create_mobile_tags([
              req.body.tag1,
              newNote.note_id
            ], function(err, result) {

              if (err) {
                console.log("ERR C!", err);
                return res.status(500).send(err)
              } else {
                // console.log("here's the result", result);
                // res.send(result)
                res.send(result);
              }
            })
          }
        })

      }
    })
  },

  // createMoblieLinks: function(req, res) { //NOTE: sending to links TABLE
  //   let note = req.body;
  //
  //   console.log("req.body: ", note);
  //
  //
  // },

  // createMoblieTags: function(req, res) { //NOTE: sending to links TABLE
  //   let note = req.body;
  //
  //   console.log("req.body: ", note);
  //
  //
  // },

}
