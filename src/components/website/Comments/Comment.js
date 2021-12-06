import photo from "../../../images/refa.jpg";
import { CommentIcon, ThumbUp } from "../../Icons";

export default function Comment({ author, createdAt, content }) {
	return (
		<div className="pb-6 flex gap-4">
			{/* User pic */}
			<div className="">
				<img
					src={photo}
					alt="propic"
					className="max-h-10 h-10 w-10 object-cover object-center rounded-full ring-2 ring-basic"
					style={{ width: "2.5rem", minWidth: "2.5rem" }}
				/>
			</div>
			{/* Comment body */}
			<div className="w-full">
				<div className="border-2 p-4 border-gray-200 rounded-xl">
					{/* Author name */}
					<p className="text-lg font-semibold text-gray-600">{author}</p>
					{/* Date of comment */}
					<p className="text-sm text-gray-500 pb-2">added {createdAt}</p>
					{/* Comment body */}
					<p className="text-gray-700 text-justify">{content}</p>
				</div>

				{/* comment reaction and replay icon */}
				<div className="flex gap-1 pt-2">
					<div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
						<ThumbUp />
						<span className="pl-1 text-sm text-gray-500">4 Reactions</span>
					</div>
					<div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
						<CommentIcon />
						<span className="pl-1 text-sm text-gray-500">3 replays</span>
					</div>
				</div>
			</div>
		</div>
	);
}
