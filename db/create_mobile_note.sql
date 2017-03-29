insert into note (user_id, title, content, favorite)
  values
  ($1, $2, $3, $4)
  RETURNING *;

-- returning *;

--XXX WORKS IN POSTICO--
