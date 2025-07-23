const Post= require('../model/post');


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
    const  imageUrl= req.body.imageUrl;
    
    const post = new Post({
        title: title,
        imageUrl: imageUrl,
        content: content,
        creator: req.userId
    })
    console.log("post",post);
    
    res.status(201).json({
      id: Math.floor((Math.random())*4),
      title :title,
      content: content
    })
}

exports.editPost=(req, res,next)=>{
    const postId= req.params.postId;

    console.log("Body", req.body)
    const title= req.body.title;
    const content= req.body.content;
    
    res.status(201).json({
      id: Math.floor((Math.random())*4),
      title :title,
      content: content
    })
}