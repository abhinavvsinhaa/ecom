const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
  host: 'localhost',
  port: 6969,
  user: 'root',
  password: 'balleballe',
  database: 'ecom'
});

db.connect(function (err) {
  if (err) {
    console.error('Error connecting to the Db: ' + err.stack);
    return;
  }
});
fs.readFile(path.join(__dirname, 'product.json'), 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }
  const arr = JSON.parse(jsonString);
  console.log(arr.length);
  // arr.forEach((obj) => {
  //   db.query(
  //     'INSERT INTO ecom.product (name,short_desc,brand,category,image_link1,image_link2,image_link3,price,quantity,rating,size) VALUES("' +
  //       obj.name +
  //       '","' +
  //       obj.desc +
  //       '","' +
  //       obj.brand +
  //       '","' +
  //       obj.category +
  //       '","' +
  //       obj.image1 +
  //       '","' +
  //       obj.image2 +
  //       '","' +
  //       obj.image3 +
  //       '",' +
  //       obj.price +
  //       ',' +
  //       obj.quantity +
  //       ',' +
  //       obj.rating +
  //       ',"' +
  //       obj.size +
  //       '");',
  //     (err) => {
  //       if (err) throw err;
  //       console.log(`Product added successfully`);
  //     }
  //   );
  // });
});
