exports.postLogout= (req, res, next)=>{
    req.session.destroy(err=>{
        console.log("error",err);
        res.redirect('/');
        
    })
}


