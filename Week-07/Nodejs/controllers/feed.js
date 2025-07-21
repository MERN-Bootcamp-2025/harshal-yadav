
exports.getPost=(req, res,next)=>{
    console.log("hello");
    
    res.status(200).json({
        message:"hello server"
    })
}

exports.addPost=(req, res,next)=>{
    console.log("Body", req.body)
    const title= req.body.title;
    const content= req.body.content;
    
    res.status(201).json({
      id: Math.floor((Math.random())*4),
      title :title,
      content: content
    })
}