const express= require('express');
const { getAllProduct , createProduct, updateProduct, deleteProduct, getSingleProduct,authorizeRole } = require('../controllers/productController');
const { isAuthendicatedUser } = require('../middleware/authentication');

const router = express.Router();

// router.route('/product').get( isAuthendicatedUser,authorizeRole('Admin'), getAllProduct);
router.route("/getSingleProduct/:id").get(isAuthendicatedUser,getSingleProduct);
router.route('/createProduct').post(isAuthendicatedUser,createProduct);
router.route("/updateProduct/:id").put(isAuthendicatedUser,updateProduct);
router.route("/deleteProduct/:id").delete(isAuthendicatedUser,deleteProduct)

module.exports=router