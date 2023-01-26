const verify = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      req.isAuth = false;
      return next();
    } 
    const token = authHeader.split(" ")[1];
    let decoded;
    try {
         decoded = await jwt.verify(token, "secretkey4000")
    } catch (error) {
        next()
    }
    if(!decoded){
        req.isAuth = false;
    }

    req.isAuth = true;
    req.userId = decoded.userId
    next()
  };

  module.exports = verify