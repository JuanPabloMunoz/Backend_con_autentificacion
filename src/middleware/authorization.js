const jwt = require('jsonwebtoken');
module.exports =  (req, res, next) => {
    let { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'No autorizado, no se ha proporcionado el Token' });
    try {
        let [type, token] = authorization.split(' ');
        if (type === 'Token' || type === 'Bearer') {
            const openToken = jwt.verify(token, process.env.SECRET);
            console.log(openToken);//borrar
            req.user = openToken.user;
            
            next();
        }else{
            return res.status(401).json({ message: 'No autorizado!!' });
        }    
    } catch (error){ 
        res.json({ message: 'No autorizado, Token no valido', error});
    
    }
}
