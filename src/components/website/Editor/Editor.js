import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor() {
	return (
		<div className="bg-white rounded-xl md:max-w-3xl mt-8 mx-auto p-6 md:p-8 shadow-lg">
			<CKEditor
				editor={ClassicEditor}
				config={{
					toolbar: [
						"heading",
						"|",
						"bold",
						"italic",
						"blockQuote",
						"numberedList",
						"bulletedList",
						"|",
						"undo",
						"redo",
					],
				}}
				className=""
			/>
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
