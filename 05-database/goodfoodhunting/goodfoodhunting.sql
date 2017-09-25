-- relational database store things in table


CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  image_url VARCHAR(400), --column
  name VARCHAR(200)
);

INSERT INTO dishes (name, image_url) VALUES ('cake','https://usercontent1.hubstatic.com/8480914.jpg');
-- pudding, httpL//blah.com/pudding.img -records
