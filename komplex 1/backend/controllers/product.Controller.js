const Product = require('../modules/product.Modul')

exports.getAllproducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
    status: 'success',
    data: {
      products
    }
  });
  }  catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  }
};

exports.getproduct = async(req, res) => {
 try {
    const products = await Product.findById(req.params.id);

    res.status(200).json({
    status: 'success',
    data: {
      products
    }
  });
  }  catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
    
  };
};

exports.createproduct = async(req, res) => {
  try {

    const newproduct = await Product.create(req.body);

    res.status(201).json({
    status: 'success',
    data: {
      product: newproduct
    }
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
    
  }
 
};

exports.updateproduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new:true,
      runValidators:true
    });
    res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  } 
};

exports.deleteproduct = async (req, res) => {

  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
    status: 'success',
    data:null
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  } 
};
