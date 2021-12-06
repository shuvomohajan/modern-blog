import Post from "./Post";
import usePosts from "../../../Hooks/usePosts";

export default function Posts() {
	const { loading, error, posts } = usePosts();

	return (
		<div className="">
			{!loading &&
				!error &&
				posts.length &&
				posts.map((post) => (
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						author={post.post_writer_name}
						createdAt={post.created_at}
					/>
				))}
		</div>
	);
}
