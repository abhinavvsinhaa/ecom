const db = require('../db-initialize');
const mysql = require('mysql');

const fs = require('fs');
fs.readFile('./product.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const arr = JSON.parse(jsonString);
  arr.forEach((obj) => {
    db.query(
      `INSERT INTO ecom.product (
            name,
            short_desc,
            brand,
            category,
            image_link1,
            image_link2,
            image_link3,
            price,
            quantity,
            rating,
            size
          ) VALUES(${obj.name},${obj.short_desc},${obj.brand},${obj.category},${obj.image_link1},${obj.image_link2},${obj.image_link3},${obj.price},${obj.quantity},${obj.rating},${obj.size});`,
      (err) => {
        if (err) throw err;
        log(`Product added successfully with id: ${db_res.insertId}`);
      }
    );
  });
});
