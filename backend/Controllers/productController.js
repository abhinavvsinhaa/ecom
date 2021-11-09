const db = require('../db-initialize');
const mysql = require('mysql');

exports.getAllProducts = (req, res, next) => {
  db.query('SELECT * FROM ecom.product', (err, db_res, fields) => {
    if (err) throw err;

    let products = [];
    for (let i = 0; i < db_res.length; i++) {
      let product = {
        name: db_res[i].name,
        desc: db_res[i].short_desc,
        category: db_res[i].category,
        brand: db_res[i].brand,
        image: [
          db_res[i].image_link1,
          db_res[i].image_link2,
          db_res[i].image_link3
        ],
        price: db_res[i].price,
        rating: db_res[i].rating,
        size: db_res[i].size,
        quantity: db_res[i].quantity
      };

      products.push(product);
    }
    res.send(products);
  });
};

exports.addProduct = (req, res, next) => {
  let product = [];
  Object.entries(req.body).map((record) => {
    product.push(record[1]);
  });

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
    ) VALUES (?);`,
    [product],
    (err, db_res, fields) => {
      if (err) throw err;
      res.json(`Product added successfully with id: ${db_res.insertId}`);
    }
  );
};

exports.getProduct = (req, res, next) => {
  let productId = req.params.id;
  db.query(
    'SELECT * FROM ecom.product WHERE id = ?',
    [productId],
    (err, db_res, fields) => {
      if (err) throw err;

      if (db_res.length === 0)
        res.json(`Product with id ${productId} not found.`);

      res.json(db_res[0]);
    }
  );
};

exports.updateProduct = (req, res, next) => {
  let productId = req.params.id;
  let update = req.body;
  db.query(
    'UPDATE ecom.product SET ? WHERE id = ?',
    [update, productId],
    (err, db_res, fields) => {
      if (err) throw err;

      res.json(
        `Update request on product id ${productId}, message: ${db_res.message}`
      );
    }
  );
};

exports.deleteProduct = (req, res, next) => {
  let productId = req.params.id;
  db.query(
    'DELETE FROM ecom.product WHERE id = ?',
    [productId],
    (err, db_res, fields) => {
      if (err) throw err;

      res.json(
        `Delete request on product id ${productId}, product affected: ${db_res.affectedRows}`
      );
    }
  );
};

exports.getFilteredProducts = (req, res, next) => {
  let query = 'SELECT * FROM ecom.product WHERE';
  let flag = 0;
  if (req.query) {
    if (req.query.size) {
      query += " CAST(`size` as CHAR) LIKE '%" + req.query.size + "%'";
      flag = 1;
    }
    if (req.query.rating) {
      if (flag !== 0) query += ' AND';
      query += ' rating>=' + mysql.escape(parseFloat(req.query.rating));
      flag = 1;
    }
    if (req.query.minprice) {
      if (flag !== 0) query += ' AND';
      query += ' price>=' + mysql.escape(parseInt(req.query.minprice));
      flag = 1;
    }
    if (req.query.maxprice)
      query += ' AND price<=' + mysql.escape(parseInt(req.query.maxprice));
  }

  db.query(query, (err, db_res, fields) => {
    if (err) console.log(err);
    res.json(db_res);
  });
};
