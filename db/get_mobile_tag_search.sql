select n.title, n.note_id from note n
join tag t on
n.note_id = t.note_id
join links l on
n.note_id = l.note_id
where n.user_id = $1 --66
and t.tag1 = $2; --req.params.srchTerm

-- NOTE: THIS QUERY PASSES!
