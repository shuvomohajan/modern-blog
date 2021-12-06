import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { convertFromRaw } from "draft-js";
import { convertToHTML } from "draft-convert";

const INITIAL_STATE = {
	author: "",
	createdAt: "",
	title: "",
	content: "",
    components: [],
};

export default function usePost(postId) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [post, setPost] = useState(INITIAL_STATE);
	const { token } = useAuth();

	useEffect(() => {
		const POST_URL = "http://modern-blog-backend.test/api/posts/" + postId;

		axios
			.get(POST_URL, {
				headers: { Authorization: "Bearer " + token },
			})
			.then((response) => {
				const data = response.data.data;
				console.log(data);
				setPost({
					author: data.post_writer_name,
					createdAt: data.created_at,
					title: data.title,
					content: convertToHTML(convertFromRaw(JSON.parse(data.content))),
                    comments: data.comments
				});
				setError(false);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError(true);
				setLoading(false);
			});
	}, [token, postId]);

	return {
		loading,
		error,
		post,
	};
}

// <div dangerouslySetInnerHTML={createMarkup(post)}></div>
// import { convertToHTML } from "draft-convert";
// convertToHTML(convertFromRaw(JSON.parse(data.content)))

// const createMarkup = (html) => {
// 	return {
// 		__html: DOMPurify.sanitize(html),
// 	};
// };
