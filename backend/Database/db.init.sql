CREATE DATABASE ecom;
USE ecom;
-- product id will be binary
-- we will use UUID() to generate unique IDs
-- convert the generated unique id to binary
-- storing id will look like this UUID_TO_BIN(UUID())
CREATE TABLE product (
  id BINARY(30) PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  short_desc VARCHAR(500),
  brand VARCHAR(20) NOT NULL,
  category VARCHAR(20) NOT NULL,
  image_link1 VARCHAR(200) NOT NULL,
  image_link2 VARCHAR(200),
  image_link3 VARCHAR(200),
  price INT NOT NULL,
  quantity INT NOT NULL,
  rating INT
);
DESC product;
-- will use md5 encryption method for storing passwords
-- md5 generates 32 char length passwords
-- minlength password - 8
-- maxlength password - 12
CREATE TABLE user (
  email VARCHAR(100) PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(32) NOT NULL,
  cart_id INT NOT NULL,
  wishlist_id INT NOT NULL,
  role VARCHAR(10)
);
DESC user;
-- constructed with method1
-- i.e. there will be mutiple products linked with same cartid
CREATE TABLE cart (
  sno INT PRIMARY KEY NOT NULL,
  cartid INT NOT NULL,
  productid BINARY(30) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY(productid) REFERENCES product(id)
);
DESC cart;