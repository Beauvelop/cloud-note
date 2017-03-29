select * from note n
join tag t on
n.note_id = t.note_id
join links l on
n.note_id = l.note_id
where n.note_id = $1
