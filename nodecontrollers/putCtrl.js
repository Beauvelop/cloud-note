// const app = require('./../server');
// const db = app.get('db');

module.exports = {
  createNote: function(req, res) {
    let note = req.body;
    for (prop in note) {
      console.log("note.props-->" + note[prop]);
    }
    // do a for in over the note obj
    // if any are undefined return a str
    //

    // in the sql just grab only what you need
    db.create_note([
      note.title,
      note.content,
      note.snippet,
      note.vidlink,
      note.tag1
    ], function(err, result) {
      if (err) {
        res.status(500).send(err)
      } else {
        console.log("here's the result", result);
        res.send(result)
      }
    })
  }

}
