import { Link } from "react-router-dom";
import photo from "../../../images/sanjoy.jpg";
import Comments from "../Comments/Comments";
import { useParams } from "react-router-dom";
import usePost from "../../../Hooks/usePost";
import DOMPurify from "dompurify";
import {ThumbUp} from "../../Icons";
import CommentInput from "../Comments/CommentInput";

export default function PostDetails() {
	const params = useParams();
	const { loading, error, post } = usePost(params.postId);

	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};

	return (
		<div className=" bg-white rounded-xl md:max-w-3xl mt-8 mx-auto p-6 md:p-8 shadow-lg">
			{!loading && !error && post && (
				<>
					{/* Head section */}
					<div className="">
						<div className="flex gap-4">
							<Link to="/profile/:userId">
								<img
									src={photo}
									alt="propic"
									className="max-h-10 h-10 w-10 object-cover object-center rounded-full ring-2 ring-basic"
									style={{ width: "2.5rem", minWidth: "2.5rem" }}
								/>
							</Link>
							<div className="">
								<Link to="/profile/:userId">
									<p className="text-gray-600 font-semibold">{post.author}</p>
									<p className="text-gray-500 text-sm">{post.createdAt}</p>
								</Link>
							</div>
						</div>
						<div className="">
							<p className="text-4xl font-bold text-gray-700 mt-6">{post.title}</p>
							<div className="pt-4 pb-6 border-b-2">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">
									#javascript
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">
									#webdev
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">
									#beginners
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">
									#codenewbie
								</span>
							</div>
						</div>
					</div>

					{/* Main Post section */}
					<div className="pt-10 pb-6 border-b-2">
						{/* Post section */}
						<div
							dangerouslySetInnerHTML={createMarkup(post.content)}
						>
						</div>

						{/* Reaction section*/}
						<div className="flex gap-3 pt-4">
							<div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
								<ThumbUp />
								<span className="pt-1 pl-1 pr-10 text-gray-500">
									34 Reactions
								</span>
							</div>
						</div>
					</div>

					{/* Comment section */}
					<div className="" id="comments">
						<p className="pt-8 pb-10 text-2xl md:text-3xl font-bold text-gray-800">
							Discussions { post.comments.length }
						</p>
						<CommentInput postId={post.id} />
						{
							(post.comments.length > 0) && <Comments comments={post.comments} />
						}
					</div>
				</>
			)}
		</div>
	);
}

// text-gray-700