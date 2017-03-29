SELECT * from note n
JOIN users u on u.id = n.user_id
JOIN bookbag b on u.id = b.user_id
JOIN reportcard r on u.id = r.user_id
JOIN tag t on u.id = t.user_id
where n.title = $1;
