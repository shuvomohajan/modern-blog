import Comment from "./Comment";
import CommentInput from "../Comments/CommentInput";

export default function Comments() {
    return (
        <div className="">
            <CommentInput />
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
}