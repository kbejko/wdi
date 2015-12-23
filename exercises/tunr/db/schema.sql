DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS songs;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  nationality TEXT NOT NULL
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  album TEXT NOT NULL,
  preview_url TEXT NOT NULL,
  artist_id INT
);
