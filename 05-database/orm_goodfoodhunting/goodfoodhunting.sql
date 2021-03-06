-- relational database store things in table


CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  image_url VARCHAR(400), --column
  name VARCHAR(200)
);


INSERT INTO dishes (name, image_url) VALUES ('cake','https://usercontent1.hubstatic.com/8480914.jpg');
-- pudding, httpL//blah.com/pudding.img -records

CREATE TABLE users(
  ID SERIAL4 PRIMARY KEY,
  EMAIL varchar(400)
);

ALTER TABLE dishes ADD COLUMN created_at TIMESTAMP;

ALTER TABLE users ADD COLUMN password_digest VARCHAR(400);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  body VARCHAR(400) NOT NULL,
  dish_id INTEGER NOT NULL,
  FOREIGN KEY (dish_id) REFERENCES dishes (id) on delete restrict
);

ALTER TABLE comments ADD COLUMN user_id INTEGER;
-- NOT NULL;
-- ALTER TABLE comments ADD CONSTRAINT FOREIGN KEY (user_id) references users (id);
