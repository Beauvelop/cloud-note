# [Scribble-wip](hhttps://github.com/Beauvelop/scribble-wip)

## NOTE ORGANIZER

User Can store notes, recipies, grocery lists of any kind and keep them in a searchable database.

## Features:
### I. Create, Edit, Add, Delete, Display & Save notes.
* `Create View`
* `Reader View`

### II. Organize note into collections and/or subject categories.
* `Book bag View`

### III. Search by keyword
* `Slide-out Menu` (available in all views)


### IV. Embed a video to be displayed beside each note
* `Reader View`

### V. Notes are kept in collections or "Book bags" for future viewing, editing or deletion.
* `Book bag View`


### VI. A data-driven display of user behavior of the site will be available in the "Report Card" view.
* `Report card View`

## VII. May need an admin page to show all potential table returns

#### Tech
Angular
ES6
Flexbox
Clipboard.js
Google Youtube API
PSQL

#### Minor Features list
```
CSS CLOCK/Timer Displayed as a Chrome Extension

Additional links with small icons displayed according to URL in the Reader View

Login Oauth

HOSTING on Heroku

```

<!-- BUG REPORT: -->
user assigns previously non-existent tag in compose-view

sends (saves it to the backend)

Postico query confirms ONLY one entry --That tag is associated only with that newly created note.

In search view. Tag is entered and searched.

The console.logged response object reveals an array of 6 items associated with that tag. They then are displayed in the view.

<!-- BUG -->
getCtrl line 21

      // XXX: BUG: Everything returns with parameters assigned!!! --The return is not filtered by the params.
