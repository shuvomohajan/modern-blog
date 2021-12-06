import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export default function Editor() {
	const [data, setData] = useState("");

	function handleChange(e, editor) {
		const editorData = editor.getData();
		setData(editorData);
	}

	return (
		<div className="bg-white rounded-xl md:max-w-3xl mt-8 mx-auto p-6 md:p-8 shadow-lg">
			<CKEditor
				editor={ClassicEditor}
				// config={{
				// 	toolbar: [
				// 		"heading",
				// 		"|",
				// 		"bold",
				// 		"italic",
				// 		"blockQuote",
				// 		"numberedList",
				// 		"bulletedList",
				// 		"|",
				// 		"undo",
				// 		"redo",
				// 	],
				// }}
				data={data}
				onChange={handleChange}
				className="p-10"
			/>
			<div className="">{data ? <div>{ReactHtmlParser(data)}</div> : ""}</div>
			<div className="mt-4">
				<button className="bg-basic px-4 py-1 text-white rounded-md font-semibold hover:bg-gradientPrimaryEnd">
					Post
				</button>
				<button className="ring-1 ring-basic font-semibold px-4 py-1 ml-2 rounded-md text-basic hover:text-gradientPrimaryEnd">
					Save
				</button>
			</div>
		</div>
	);
}
