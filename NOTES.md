DB description

I. "causes":  2 columns ---         id / name

II. "affected_areas": 2 columns --- id / name

III. "injuries": 5 columns ---      id / name     / description / tth / affected_area_id

IV. "incidents": 4 columns ---      id / us_state / injury_id / cause_id

|---------------------------------|


__dirname
app.use(express.static(__dirname  --> + './...some .../ public'))

This tells node to serve the front-end from

You must have config above config = require('./config')

for anythng that requires config ---so passport
