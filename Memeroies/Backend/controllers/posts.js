import PostMessage from "../models/postMessage.js";

export const getPosts = async(req,res) => {
    try{
        const postsMessages = await PostMessage.find();
        res.status(200).json(postsMessages);
    }catch(error){
        res.status(404).json({ message : error.message})
    }
}

export const createPosts = async(req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const updatePosts = async(req,res) => {
    const {id:_id} = req.params;
    const post = req.body;
//    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send('No post with that id');

    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {new : true})
    
    res.json(updatePost);
}

export const updateLikeCount = async(req,res) => {
    try{
        const {id} = req.params;
        const post = await PostMessage.findById(id);
        const updatedCount = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1},{new : true})
        res.json(updatedCount);
    }catch(error){
        console.log(error.message);
    }

}

export const deletePosts = async(req,res) => {
    const {id} = req.params;
    const deletePost = await PostMessage.findByIdAndRemove(id)
    
    res.json(deletePost);
}