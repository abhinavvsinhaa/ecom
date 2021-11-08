const db = require('../db-initialize');

exports.getAllProducts = (req, res, next) => {
  db.query('SELECT * FROM product;', (err, db_res, fields) => {
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
      console.log(db_res);
      res.json('Products added successfully');
    }
  );
};
exports.getProduct = (req, res, next) => {};
exports.updateProduct = (req, res, next) => {};
exports.deleteProduct = (req, res, next) => {};
