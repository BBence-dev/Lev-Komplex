const Admin = require('./../modules/admin.Modul')

exports.getAlladmins = async (req, res) => {
  try {
    const admins = await Admin.find();

    res.status(200).json({
    status: 'success',
    data: {
      admins
    }
  });
  }  catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  }
};

exports.getadmin = async(req, res) => {
 try {
    const admins = await Admin.findById(req.params.id);

    res.status(200).json({
    status: 'success',
    data: {
      admins
    }
  });
  }  catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
    
  };
};

exports.createadmin = async(req, res) => {
  try {

    const newadmin = await Admin.create(req.body);

    res.status(201).json({
    status: 'success',
    data: {
      admin: newadmin
    }
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
    
  }
 
};

exports.updateadmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new:true,
      runValidators:true
    });
    res.status(200).json({
    status: 'success',
    data: {
      admin
    }
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  } 
};

exports.deleteadmin = async (req, res) => {

  try {
    await Admin.findByIdAndDelete(req.params.id);

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
