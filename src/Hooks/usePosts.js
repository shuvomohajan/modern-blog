import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function usePost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        const POSTS_URL = "http://modern-blog-backend.test/api/posts";

		axios
			.get(POSTS_URL, {
				headers: {Authorization: "Bearer " + token },
			})
			.then((response) => {
				const data = response.data.data;
				setPosts(data);
                setError(false);
                setLoading(false);
			})
			.catch((err) => {
				console.log(err);
                setError(true);
                setLoading(false);
			});
    }, [token]);

    return {
        loading,
        error,
        posts
    };
}