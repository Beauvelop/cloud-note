select * from note n
join tag t on
n.note_id = t.note_id
join links l on
l.links_id = l.note_id
