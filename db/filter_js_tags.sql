--Get name, title, content of all users with javascript tags

SELECT u.name, title, n.content from note n
JOIN users u on u.id = n.user_id
JOIN bookbag b on u.id = b.user_id
JOIN reportcard r on u.id = r.user_id
JOIN tag t on u.id = t.user_id
where t.tag1 like '%avascript'
