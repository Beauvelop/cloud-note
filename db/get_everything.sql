select name, title, content from users u
join note n on
u.id = n.user_id
where u.name like '%eroy%' --all notes by Alfred
