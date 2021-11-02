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
-- 2 Nov 21
-- Added new column size to store available sizes
ALTER TABLE ecom.product
ADD `size` varchar(100) NULL;
-- Modify short_desc column to 1000 char
ALTER TABLE ecom.product
MODIFY COLUMN short_desc varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL;
-- Change rating column data type from int to float
ALTER TABLE ecom.product
MODIFY COLUMN rating FLOAT NULL;
-- Inserting into product table
INSERT INTO ecom.product
VALUES (
    UUID_TO_BIN(UUID()),
    'Nike Wildhorse 7',
    'Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7.Confidently take on rocky terrain with high-abrasion rubber on the outsole that adds durable traction.The upper delivers durable ventilation with support where you need it.Foam midsole cushioning gives a neutral feel and provides responsiveness on every mile.',
    'Nike',
    'Sneakers',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f94ed87f-963e-4bfb-b88d-4f476a0e79df/wildhorse-7-trail-running-shoes-XdK82N.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4891c4a3-1f91-4748-917d-722ac3e5e454/wildhorse-7-trail-running-shoes-XdK82N.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/744e4eff-1a7e-427e-9a26-97743a821f13/wildhorse-7-trail-running-shoes-XdK82N.png',
    10295,
    20,
    4.5,
    '5, 8, 9, 10'
  );
-- Inserting 4 more products
INSERT INTO ecom.product
VALUES (
    UUID_TO_BIN(UUID()),
    'Nike Air Zoom Terra Kiger 7',
    'Run the trail in a super-responsive running shoe.Fast and lightweight, it delivers a breathable and secure feel as you race over rocky paths.Updated traction lugs provide stability for your downhill miles.',
    'Nike',
    'Sneakers',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1802a64b-3520-425b-9151-c42ce0955057/air-zoom-terra-kiger-7-trail-running-shoes-nm2pqh.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0215be2d-6cdb-476f-bc4f-716b8a75c1d8/air-zoom-terra-kiger-7-trail-running-shoes-nm2pqh.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/901325b5-145a-4b31-9970-45ddcefdd7c0/air-zoom-terra-kiger-7-trail-running-shoes-nm2pqh.png',
    12495,
    12,
    4.8,
    '7, 8.5, 9'
  ),
  (
    UUID_TO_BIN(UUID()),
    'Jordan Series .02',
    'The Jordan Series .02 continues the story of how Mike became the greatest of all time. Wearable in any setting, the shoe has some stretch, to accommodate wider feet. It is constructed like a classic sneaker, with clean, high sidewalls that are wrapped for durability. The shoe symbolises the influence and inspiration of Mike for the generations of kids who look up to him—players and fans alike looking to find their wings.',
    'Nike',
    'Sneakers',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/159e3d66-8c63-433f-91e2-8ca3734979ef/jordan-series-2-shoe-nS3GqL.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5136c6e3-a3d4-4ce7-a05b-de812d3f368f/jordan-series-2-shoe-nS3GqL.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d4241552-2ee0-4c6e-9109-c6312c4766de/jordan-series-2-shoe-nS3GqL.png',
    6795,
    18,
    4.6,
    '5, 5.5, 6, 6.5'
  ),
  (
    UUID_TO_BIN(UUID()),
    'KD14 EP',
    'Kevin Durant lurks on the wing, waiting for the right time to strike before slicing his way through defences.The KD14 EP is designed to help versatile, relentless players like KD feel fresh all game long. Multi-layer mesh and a midfoot strap help reduce the foot  movements inside the shoe. Full-length Zoom Air cushioning plus Cushlon foam give back energy for lasting performance.This EP version uses an extra-durable sole that is ideal for outdoor courts.',
    'Nike',
    'Sneakers',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c98cf048-88ab-47b0-bb7d-566d5cf14abf/kd14-ep-basketball-shoes-8xhLgp.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e5096c81-fefd-4fde-be1d-96f041929182/kd14-ep-basketball-shoes-8xhLgp.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/27358da1-4a50-4b7f-9854-bf543afbfa26/kd14-ep-basketball-shoes-8xhLgp.png',
    13495,
    5,
    4.7,
    '7, 7.5, 8, 8.5, 9, 10, 11, 12'
  ),
  (
    UUID_TO_BIN(UUID()),
    'Nike Air Force 1 Low Cozi By You',
    'Position your feet for the chill in this cosy AF-1, featuring a warm, fuzzy collar liner that feels soft and extends a bit over the top edge for classic cold-weather appeal.Make this hoops-inspired legend your very own, customising details from the materials on the top to the sole underfoot.',
    'Nike',
    'Sneakers',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e4422d9-80ed-42ce-8842-e44028e27e32/custom-nike-air-force-1-low-cozi-custom-shoe.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ae10a516-9d70-4de4-9ba8-f8e8b32f7831/custom-nike-air-force-1-low-cozi-custom-shoe.png',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/33f4eb66-84a5-449d-bd08-26468b68d867/custom-nike-air-force-1-low-cozi-custom-shoe.png',
    11495,
    4,
    4.3,
    '3, 4, 5, 6, 7.5, 8.5, 9'
  );