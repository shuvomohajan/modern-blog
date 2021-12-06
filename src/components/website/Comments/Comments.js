import Comment from "./Comment";

export default function Comments({ comments }) {
	return (
		<div className="">
			{comments.length > 0
				? comments.map((comment) => (
						<Comment
							key={comment.id}
							id={comment.id}
							author={comment.comment_writer_name}
							createdAt={comment.created_at}
							content={comment.content}
						/>
				  ))
				: null}
		</div>
	);
}
