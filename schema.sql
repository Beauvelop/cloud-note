/***************************[I. USERS TABLE]***************************************
(
id,
name
)

*/
CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  auth0_id TEXT
);


INSERT INTO users
(
  id,
  name
)

VALUES ('Alfred Brown'),
('Leroy mJenkins'),
('Susan Wilson'),
('Casey Affleck'),
('Jennifer Lawrence'),
('Gordon Ramsey');


/***************************[II. note TABLE]***************************************

(
id,
user_id,
title,
content,
snippet,
bag_id
)
*/

CREATE TABLE note
(
  note_id SERIAL PRIMARY KEY,
  user_id INTEGER,
  title VARCHAR(40) NOT NULL,
  content TEXT NOT NULL,
  snippet TEXT,
  favorite BOOLEAN DEFAULT FALSE
);

  -- ADD COLUMN note BOOLEAN DEFAULT FALSE;

  INSERT INTO note

  (
  id,
  user_id,
  title,
  content,
  snippet,
  favorite)


  VALUES
  (
    1,
    1,

    'First Sample Title Entry',

    'Lorem ipsum dolor sit amet, vehicula diam non lacus, proin eu, rutrum mattis lacus ut est, sed etiam iure erat id vestibulum. Dolor tortor integer leo mauris. Consectetuer metus luctus sodales urna, et pede lobortis elit, praesent aenean eros at vehicula odio ipsum, molestie arcu, nulla ullam et convallis per diam justo. Vel sit placerat, dictum bibendum elit dui eu fames nullam, lacus laoreet, ipsum neque rutrum tincidunt turpis eleifend. Nunc neque, mi integer wisi pellentesque. Ac ante felis magna malesuada quam. Nullam maecenas est vestibulum quam at tincidunt, ornare erat in elit amet natoque felis, phasellus eros gravida eget lectus. Nonummy amet adipiscing ullamcorper amet, dolor nibh cras at urna orci lectus, maecenas ligula porta nulla, erat egestas sapien, parturient morbi excepturi ridiculus magna lectus cursus.',

    'function fizzBuzz(){\r\n\tfor(var i=1;i<=100;i++){\r\n\t\tif(i%5 === 0 && i%3 === 0){\r\n\t\t\tprint(\"FizzBuzz\");\r\n\t\t} else if(i%3 === 0){\r\n\t\t\tprint(\"Fizz\");\r\n\t\t} else if(i%5 === 0){\r\n\t\t\tprint(\"Buzz\");\r\n\t\t} else {\r\n\t\t\tprint(i);\r\n\t\t}\r\n\t}\r\n}',

    false
  ),

  (
    2,
    2,

    'Kyle Simpson comment on',

    'We said that Scope is a set of rules for looking up variables by their identifier name. Theres usually more than one Scope to consider, however.\rJust as a block or function is nested inside another block or function, scopes are nested inside other scopes. So, if a variable cannot be found in the immediate scope, Engine consults the next outer containing scope, continuing until found or until the outermost (aka, global) scope has been reached.',

    'function foo(a) {\r\n    console.log( a + b );\r\n}\r\n\r\nvar b = 2;\r\n\r\nfoo( 2 ); \/\/ 4',

    true
  ),

  (
    3,
    3,

    'Arrow Function Implicit Return',

    'What else could I do with this? I can use what’s called an implicit return.\rHold on — what’s a explicit return?\rThat’s when you explicitly write return for what you want to return. But a lot of these callback functions that we write in JavaScript are just one-liners, where we just return something immediately in one line. We don’t need a whole bunch of lines.\r**So – if the only purpose of your arrow function is to return something, there is no need for the return keyword. **\rOur three line function with an explicit return is now a single line function with an implicit return.\rWe did three things here:\r\tdelete the return\r\tput it up on all of one line\r\tdelete the curly brackets\rWhen you delete your curly brackets, it’s going to be an implicit return, which means we do not need to specify that we are returning ${name} bos.\r It will just assume that we’re doing so, and you can console.log it to see the same thing again.',

    'const fullNames4 = names.map(name => `${name} bos`);\r\n\r\nconsole.log(fullNames4);  \/\/ Wes Bos, Kait Bos, Lux Bos',

    true
  ),

  (
    4,
    4,

    'Title 4',

    'Contentcon ten tco n co ntent. Con ten tc ontentc ontent content content.Contentcon ten tco n co ntent. Con ten tc ontentc ontent content \r\nContentContentcon ten tco n co ntent. Con ten tc ontentc ontent content contentContentcon ten tco n co ntent. Con ten tc ontentc ontent content content.Contentcon ten tco n co\r\n ntent. Con ten tc ontentc ontent content contentContentcon ten tco n co ntent. Con ten tc ontentc ontent content content',

    'Snippet snippetsnippetsnip\r\n snippet() { \r\n) Snip = et \r\n}',
    false
  ),

  (
    5,
    5,

    'SampleTitle',

    'Contentcon ten tco n co ntent. Con ten tc ontentc ontent content content.Contentcon ten tco n co ntent. Con ten tc ontentc ontent content \r\nContentContentcon ten tco n co ntent. Con ten tc ontentc ontent content contentContentcon ten tco n co ntent. Con ten tc ontentc ontent content content.Contentcon ten tco n co\r\n ntent. Con ten tc ontentc ontent content contentContentcon ten tco n co ntent. Con ten tc ontentc ontent content content',

    'Snippet snippetsnippetsnip\r\n snippet() { \r\n) Snip = et \r\n}',

    false
  ),

  (
    6,
    6,

    'Roast Chicken Recipe: Gordon Ramsey',

    'Preheat the oven to 180°C/Gas 4.\rFirst make the stuffing. Heat a little olive oil in a large frying pan, add the chorizo and fry for about 3 minutes until turning golden. Add the onion and cook for a minute or two until softened, then add the garlic. Cook for a further couple of minutes before adding the leaves from 3 thyme sprigs. Stir in the cannellini beans, seasoning well. Cook for a minute or two to warm through. Add the tomatoes and a couple of tablespoons of the oil they are stored in. Stir to combine, then remove from the heat.\rNow prepare the chicken. Season the cavity with salt and pepper, then fill with the chorizo stuffing and place a whole lemon at the cavity opening, tucking any excess skin over it. Drizzle the chicken with olive oil, sprinkle over the paprika and season with salt and pepper. Rub into the chicken skin.\rPour the wine and about 200ml of water into a roasting tray and season. Add the chicken and the remaining sprigs of thyme, then cover with foil and roast for 1 hour in the preheated oven.\rAfter 1 hour, remove the foil from the chicken, baste with the roasting juices and turn the oven up to 200°C/Gas 6. Roast for another 25–30 minutes until the skin is golden brown and the juices from the thigh run clear. Remove from the oven and rest for 15 minutes before serving.\rRemove the lemon from the chicken cavity, and squeeze the juice into the pan juices. Whisk together to create a light gravy – if you prefer a thicker gravy, reduce over a high heat.',

    '1 large free-range chicken, about 2kg\r\n1 lemon\r\nOlive oil, for drizzling\r\n1 heaped tsp paprika (sweet or smoked, as preferred)\r\n400ml white wine',

    true
  )
  RETURNING *;

/***************************[III. LINKS TABLE]***************************************

(id,
vidlink,
link1,
link2,
link3,
user_id
)

*/


CREATE TABLE links
(
  id SERIAL PRIMARY KEY,
  vidlink varchar(200),
  link1 varchar(200),
  link2 varchar(200),
  link3 varchar(200),
  note_id INTEGER,
)

insert into links
values (
  1,
  'https://youtu.be/Kv1i0ddE4xY',

  'https://en.wikipedia.org/wiki/Fizz_buzz',
  'http://stackoverflow.com/questions/24312243/fizzbuzz-example-in-javascript?rq=1',
  'https://medium.com/@motyar/the-smallest-and-smartest-fizzbuzz-a51dfc09b59#.icae1q4pz',
  1
),
(
  2,
  'vidlinkPLACHOLDER2',

  'extralinkPLACHOLDER2',
  'extralinkPLACHOLDER2',
  'extralinkPLACHOLDER2',
  2
),
(
  3,
  'vidlinkPLACHOLDER3',

  'extralinkPLACHOLDER3',
  'extralinkPLACHOLDER3',
  'extralinkPLACHOLDER3',
  3
),
(
  4,
  'vidlinkPLACHOLDER4',

  'extralinkPLACHOLDER4',
  'extralinkPLACHOLDER4',
  'extralinkPLACHOLDER4',
  4
),
(
  5,
  'vidlinkPLACHOLDER5',

  'extralinkPLACHOLDER5',
  'extralinkPLACHOLDER5',
  'extralinkPLACHOLDER5',
  5
),
(
  6,
  'vidlinkPLACHOLDER6',

  'extralinkPLACHOLDER6',
  'extralinkPLACHOLDER6',
  'extralinkPLACHOLDER6',
  6
)

 /***************************[IV. TAG TABLE]***************************************

(
id,
user_id,
tag1,
tag2,
tag3,
note_id
)

*/

CREATE TABLE tag
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  tag1 VARCHAR (20) NOT NULL,
  tag2 VARCHAR (20),
  tag3 VARCHAR (20),
  note_id INTEGER
)


insert into tag
(
tag1,
tag2,
tag3,
note_id
)
values
('javascript', 'toyProblem', 'if Statement', 1),
('javascript', 'scope', 'this', 2),
('javascript', 'ES6', 'functions', 3),
('placeholderTAG', 'placeholderTAG2', 'placeholderTAG3', 4),
('placeholderTAG', 'placeholderTAG2', 'placeholderTAG3', 5),
('recipe', 'chicken', NULL, 6)
RETURNING * ;


/***************************[VI. REPORT TABLE]***************************************

(
id,
user_id,
note_id,
)
*/

CREATE TABLE report
(
  id SERIAL PRIMARY KEY,
  user_id integer NOT NULL
)

INSERT INTO report
(user_id)
VALUES
(1),
(2),
(3),
(4),
(5),
(6),
RETURNING * ;


/*XXX: USEFUL SQL CODES CHEATSHEET--

NB: RENAME TABLE
ALTER TABLE table_name
  RENAME TO new_table_name
  returning * ;

NB:rename COLUMN
 ALTER TABLE users
	RENAME COLUMN reportcard_id TO report_id

NB:MODIFY TABLE PROPERTIES
ALTER TABLE supplier
  ALTER COLUMN supplier_name TYPE CHAR(100),
  ALTER COLUMN supplier_name SET NOT NULL;

NB: UPDATE TABLES
UPDATE note
SET bag_id=6
WHERE user_id=6;
 returning *;

NB:DELETE RECORD
DELETE FROM table_name
WHERE some_column=some_value;

NB: DELETE column
ALTER TABLE links
  DROP COLUMN user_id;

NB: ADD column
ALTER TABLE report
  ADD COLUMN tag_id INTEGER;

*/



/*************************XXX SAMPLE QUERIES*************************

[username, note title, bagname]

select u.name, n.title, b.bagName from note n
join users u on
u.id = n.user_id
join bag b on
b.user_id = u.id


--[FIND All tags of a user]
select u.name, r.id reportID, t.tag1, t.tag2, t.tag3 from users u
join report r on
u.id = r.user_id
join tag t on
r.tag_id = t.id
where u.name = 'Casey Affleck'

--[FIND ALL NOTES of particular user]

select name, title, content from users u
join note n on
u.id = n.user_id
where u.name like '%fred%'

--[CREATE A note of an EXISTING USER]

INSERT INTO note (id,user_id, title, content, snippet, bag_id)
VALUES
(
24,
1,
'Third Note title',
'3THIS IS WHERE MY CONTENT GOES.',
'3THIS IS A WONDERFUL SNIPPET',
56
);

Insert into links
(id, vidlink, link1, link2, link3, note_id)
values
(9,
 'http://vimeo.com',
'twitterlink',
'wikipedia',
'nytimes.com',
23
);

QUESTION: HOW do I update several fields in different tables at a time?
THE ABOVE CODE ALMOST WORKS!



*/
