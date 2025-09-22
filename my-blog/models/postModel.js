import{Schema, model,models} from "mongoose";



const postSchema=new Schema(
    {
        title: {type: String, required: true},
        description : {type: String, required: true},
        image : {type: String, required: true},

    }
);
const PostModel = models.Post || model("Post", postSchema);

export default PostModel;
