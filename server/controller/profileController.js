const User = require('../models/User');

exports.createUserProfile = async (req,res)=> {
    const { name, email, bio, publicKey } = req.body;
    if (!publicKey){
        return res.status(400).json({ error: 'Request should have publicKey' });
    }
   
    return (
        User.findOne({publicKey})
        .then(user=> {
            if(!user) {
                res.status(400).json({ errors:  'user doesnot exists' });
                return null;
            }
            User.findOneAndUpdate(
                { publicKey },
                { $set: {
                    name,
                    email, 
                    bio
                } },
                { new: true }
              ).then(s=> res.json(s));
        }).catch(err=> res.status(500).json(err))
    )
}