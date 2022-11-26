const Post = require("../model/Post");
const User = require("../model/User");
const mongoose = require("mongoose");

const PostController = {

    //create post
    createPost: async(req, res) => {
        const newPost = new Post(req.body);
        try {
            newPost.user = req.user.userId;
            const savePost = await newPost.save();
            // await User.findOneAndUpdate(
            //     {"._id" : savePost.user},
            //     {$push: {posts: savePost._id}}
            // )
            // const user =  await User.findById(savePost.user);
            // await user.updateOne({$push: {posts: savePost._id}})
            res.status(200).json({
                success: true,
                post: savePost
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            });
        }
    },

    //like a post
    likePost: async(req, res) => {
       const userId = req.user.userId
        try {
            let post = await Post.findById(req.params.id);

            if(!post.likes.includes(userId)) {
                // console.log(req.body.user);
                await post.updateOne({$push: {likes: userId}});
                const result = {
                    success: true,
                    message: "Liked!",
                    like_num: post.likes.length + 1
                };
                res.status(200).json(result);
            }else {
                await post.updateOne({$pull: {likes: userId}});
                const result = {
                    success: true,
                    message: "Unliked!",
                    like_num: post.likes.length - 1
                };
                res.status(200).json(result);
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            });
        }
    },


    //view all post
    getAllPosts: async(req, res) => {
        try {
            const allPosts = await Post.find()
            .populate("user")
            .populate("coffee");
           res.status(200).json({
            success: true,
            posts: allPosts
           });
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            });
        }
    },


    //view post in coffee
    getPostInCoffee: async(req, res) => {
        try {
            console.log(req.params.coffee);
            const localPosts = await Post.find({coffee: req.params.coffee})
            .populate("user")
            .populate("coffee");
            res.status(200).json({
                success: true,
                posts: localPosts
            });
            
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            });
        }
    },


    //access a post
    //req params: "/:userId" : current user id
    //req body: 
    //    userId: post's owner id
    //    postId: post id
    accessPost: async(req, res) => {
        try {
            const currentUserId = req.user.userId;
            const targetPostId = req.params.postId;
            // console.log(targetPostId);
            const targetPost = await Post.findById(targetPostId);
            const targetUserId = targetPost.user;

            //kiem tra khong phai la post cua minh!!!
            if(currentUserId !== targetUserId.toString()){

                //Kiem tra minh da access bai nay chua
                const alreadyAccess =  targetPost.accessUser.includes(currentUserId);

                if(!alreadyAccess){

                    await targetPost.updateOne({$push: {accessUser: currentUserId}});
                    res.status(200).json({
                        success: true,
                        status: "accessed",
                        message : "You have accessed this post!"
                    });
                }else{
                    await targetPost.updateOne({$pull: {accessUser: currentUserId}});
                    res.status(200).json({
                        success: true,
                        status: "unaccessed",
                        message : "You have unaccessed this post!"
                    });
                }

            }else{
                res.status(403).json(
                    {
                        success: false,
                        message : "You can not access your own post!"
                    });
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    }, 


    //accept a user
    //req params: "/:userId" : current user id
    //req body: 
    //    userId: post's follower id
    //    postId: current user's post id
    acceptUser: async(req, res) => {
        try {
            const currentUserId = req.user.userId;
            const targetPostId = req.params.postId;
            const targetPost = await Post.findById(targetPostId);
            const targetUserId = req.body.accesser;

            //kiem tra co phai la post cua minh!!!
            console.log(currentUserId);
            console.log(targetPost.user.toString());
            if(currentUserId === targetPost.user.toString()){

                //Kiem tra user nay da access bai nay chua
                const alreadyAccess =  targetPost.accessUser.includes(targetUserId);

                if(alreadyAccess){
                    await targetPost.updateOne({
                        $push: {acceptedUser: targetUserId},
                        $pull: {accessUser: targetUserId}
                    });
                    res.status(200).json({
                        success: true,
                        status: "accepted",
                        message : "You have accepted this user!"
                    });
                }else{
                    await targetPost.updateOne({$pull: {accessUser: currentUserId}});
                    res.status(403).json({
                    success: false,
                    message : "Can not accept person who not yet accessted!"
                });
                }

            }else{
                res.status(403).json({
                    success: false,
                    message : "You do not have control over this post!"
                });
            }
            
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            });
        }
    }, 

    //view my posts
    getMyPosts: async (req, res) => {
        try {
            const userId = req.user.userId;
            const myPosts = await Post.find({user: userId})
            .populate("user")
            .populate("coffee");
            res.status(200).json({
                success: true,
                posts: myPosts
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            })
        }
    }, 

    //xem nguoi thich
    getLikes: async (req, res) => {
        try {
            const post = await Post.findById(req.params.postId).populate("likes");
            const likes = await post.likes;
            res.status(200).json({
                sucess: true,
                likes: likes
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            })
        }
    },

    //xem nguoi access
    getAccess: async (req, res) => {
        try {
            const userId = req.user.userId;
            const post = await Post.findById(req.params.postId).populate("accessUser");
            if(userId === post.user.toString())
            {
                const accessUser = post.accessUser;
                res.status(200).json({
                    sucess: true,
                    accessUser: accessUser
                })
            }else {
                res.status(403).json({
                    status: false,
                    message: "You do not have accessable!"
                })
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            })
        }
    },

    //xem nguoi accpt
    getAccept: async (req, res) => {
        try {
            const userId = req.user.userId;
            const post = await Post.findById(req.params.postId).populate("acceptedUser");
            if(userId === post.user.toString())
            {
                const acceptedUser = post.acceptedUser;
                res.status(200).json({
                    sucess: true,
                    acceptUser: acceptedUser
                })
            }else {
                res.status(403).json({
                    status: false,
                    message: "You do not have accessable!"
                })
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            })
        }
    },

    //get post that user was accepted
    getAcceptedPosts: async (req, res) => {
        try {
            const userId = req.user.userId;
            console.log(userId);
            const posts = Post.find({acceptedUser: mongoose.Types.ObjectId(userId)});
            res.status(200).json({
                success: true,
                posts: posts
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                err: error
            })
        }
    }
};





module.exports = PostController;