const express= require('express');
const { getAllProduct , createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController');

const router = express.Router();

router.route('/product').get(getAllProduct);
router.route("/getSingleProduct/:id").get(getSingleProduct);
router.route('/createProduct').post(createProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct)

module.exports=router