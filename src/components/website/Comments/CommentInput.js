import photo from "../../../images/sanjoy.jpg";

export default function CommentInput() {
	return (
		<div className="pb-6 flex gap-4">
			<div className="">
				<img
					src={photo}
					alt="propic"
					className="max-h-10 h-10 w-10 object-cover object-center rounded-full ring-2 ring-basic"
					style={{ width: "2.5rem", minWidth: "2.5rem" }}
				/>
			</div>
			<div className="w-full">
				<div className="">
					<textarea
						className="resize-none px-3 py-2 ring-1 ring-gray-300 text-gray-700 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-basic"
						rows="6"
					></textarea>
				</div>
				<div className="">
                    <button className="bg-basic px-4 py-1 text-white rounded-md font-semibold hover:bg-gradientPrimaryEnd">Post</button>
                    <button className="border border-basic px-4 py-1 ml-2 rounded-md text-gradientPrimaryEnd hover:text-red-600">Dismiss</button>
                </div>
			</div>
		</div>
	);
}
