import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Testing() {
	const { token } = useAuth();
	const POST_URL = "http://modern-blog-backend.test/api/posts";

	const [title, setTitle] = useState("");
	const [status, setStatus] = useState(1);
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const editorLabels = {
		// BlockType
		"components.controls.blocktype.h1": "Heading",
		"components.controls.blocktype.h2": "Sub Heading",
		"components.controls.blocktype.normal": "Normal",
	};

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.post(
				POST_URL,
				{
					title: title,
					content: JSON.stringify(
						convertToRaw(editorState.getCurrentContent())
					),
					category_id: 1,
					status: status,
				},
				{
					headers: { Authorization: "Bearer " + token },
				}
			)
			.then((res) => {
				console.log(res.data.message);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="bg-white rounded-xl md:max-w-3xl mt-8 mx-auto p-6 md:p-8 shadow-lg flex flex-col gap-4">
			<form onSubmit={handleSubmit}>
				<div className="">
					<label htmlFor="" className="text-xl font-semibold text-gray-600">
						Title
					</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="shawdow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none"
					/>
				</div>
				<div className="">
					<label htmlFor="" className="text-xl font-semibold text-gray-600">
						Main Content
					</label>
					<Editor
						editorState={editorState}
						wrapperClassName="wrapper-class"
						editorClassName="ring-2 ring-gray-300 px-4"
						toolbarClassName="ring-2 ring-gray-300 text-gray-700"
						onEditorStateChange={setEditorState}
						localization={{ locale: "en", translations: editorLabels }}
						toolbar={{
							options: ["inline", "list", "blockType", "history"],
							inline: {
								inDropdown: false,
								options: ["bold", "italic", "underline"],
							},
							blockType: {
								inDropdown: false,
								options: ["Normal", "H1", "H2"],
							},
							list: { inDropdown: false, options: ["ordered", "unordered"] },
							history: { inDropdown: false },
						}}
					/>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="bg-basic px-4 py-1 text-white rounded-md font-semibold hover:bg-gradientPrimaryEnd"
					>
						Post
					</button>
					<button
						type="submit"
						onClick={() => setStatus(0)}
						className="ring-1 ring-basic font-semibold px-4 py-1 ml-2 rounded-md text-basic hover:text-gradientPrimaryEnd"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}
