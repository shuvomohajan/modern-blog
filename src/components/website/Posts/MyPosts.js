import Post from "./Post";
import usePosts from "../../../Hooks/usePosts";
import { useAuth } from "../../../context/AuthContext";

export default function MyPosts() {
    const { loading, error, posts } = usePosts();
    const { userState } = useAuth();

	return (
		<div className="">
			{!loading &&
				!error &&
				posts.length &&
				posts.map((post) => (
                    post.post_writer_user_id === userState.id &&
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