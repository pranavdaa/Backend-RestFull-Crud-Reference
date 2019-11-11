const express = require('express');

const router = express.Router();
const Post = require('../models/Posts')

router.get('/',async (req,res)=>{
  try{
const post = await Post.find();
  res.json(post);
  }
  catch(err){
res.json({message:err});
  }

})

router.get('/:postId', async (req,res)=>{
  try {
   const post = await Post.findById(req.params.postId);
  res.json(post);
  } catch (error) {
    res.json({message:err});
  }
})

router.delete('/:postid',async(req,res)=>{
  try {
const rpost = await  Post.remove({_id:req.params.postid})    
 res.json(rpost)
  } catch (error) {
    res.json({message:error})
  }

})

router.patch('/:postId',async(req,res)=>{
  try {
 const upost = Post.updateOne({_id:req.params.postid},

 { $set : {title:req.body.title}}
 
 );
res.json(upost)
  } catch (error) {
res.json({message:error})
  }
})

router.post('/',(req,res)=>{
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
post.save()
   .then(data =>{
     res.json(data);
   })
   .catch(err =>{
     res.json({message:err})
   })
})
module.exports = router;