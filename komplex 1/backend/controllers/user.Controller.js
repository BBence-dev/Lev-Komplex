const user = require('./../modules/user.Modul')

exports.getAllusers = async (req, res) => {
  try {
    const users = await user.find();

    res.status(200).json({
    status: 'success',
    data: {
      users
    }
  });
  }  catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  }
};

exports.getuser = async(req, res) => {
 try {
    const users = await user.findById(req.params.id);

    res.status(200).json({
    status: 'success',
    data: {
      users
    }
  });
  }  catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
    
  };
};

exports.createuser = async(req, res) => {
  try {

    const newuser = await user.create(req.body);

    res.status(201).json({
    status: 'success',
    data: {
      user: newuser
    }
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
    
  }
 
};

exports.updateuser = async (req, res) => {
  try {
    const user = await user.findByIdAndUpdate(req.params.id, req.body, {
      new:true,
      runValidators:true
    });
    res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:'Nem valós adat lett küldve'
    });
  } 
};

exports.deleteuser = async (req, res) => {

  try {
    await user.findByIdAndDelete(req.params.id);

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
