import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(403).send("Access denied.");
        }
        if (token.startsWith("Bearer ")) {
            const verified = jwt.verify(token.slice(7,token.length), process.env.JWT_SECRET);
            req.user = verified;
            next();
        }else{
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;
            next();
        }
        
    } catch (error) {
        res.status(501).json({error: error.message});
    }
}