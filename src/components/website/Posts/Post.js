import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import photo from "../../../images/sanjoy.jpg";
import { CommentIcon, ThumbDown, ThumbUp } from "../../Icons";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Post({id, title, author, createdAt}) {
	return (
		<div className="flex justify-left bg-white rounded-xl md:max-w-2xl mt-8 mx-auto p-6 md:p-8 shadow-lg">
			<div className="">
				<Link to="/profile/:userId">
					<img
						src={photo}
						alt="propic"
						className="max-h-12 h-12 w-12 object-cover object-center rounded-full ring-2 ring-basic"
						style={{ width: "3rem", minWidth: "3rem" }}
					/>
				</Link>
			</div>
			<div className="ml-4">
				<div className="">
					<Link to="/profile/:userId">
						<p className="text-gray-600 font-semibold">{author}</p>
						<p className="text-gray-500 text-sm">{createdAt}</p>
					</Link>
					<Link to={`/post-details/${id}`}>
						<p className="text-3xl font-bold text-gray-700 mt-4 hover:text-basic cursor-pointer">
							{title}
						</p>
					</Link>
					<div className="pt-4 pb-2">
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
				<div className="flex gap-3 pt-4">
					<div className="flex justify-center whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
						<ThumbUp />
						<span className="pl-1 pr-2 text-gray-500">34 Liked</span>
					</div>
					<div className="flex justify-center whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
						<ThumbDown />
						<span className="pl-1 pr-10 text-gray-500">34 Disliked</span>
					</div>
					<div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
						<CommentIcon />
						<HashLink smooth to={`/post-details/${id}#comments`}>
                            <span className="pt-1 pl-1 text-gray-500">3 Comments</span>
                        </HashLink>
					</div>
				</div>
			</div>
		</div>
	);
}
