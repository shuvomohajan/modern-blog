import photo from '../images/sanjoy.jpg';

export default function CommentInput() {
    return (
        <div className="pb-6 flex gap-4">
            <div className="">
                <img src={photo} alt="propic" className="max-h-10 h-10 w-10 object-cover object-center rounded-full ring-2 ring-basic" style={{width:'2.5rem', minWidth:'2.5rem'}} />
            </div>
            <div className="">
                <textarea className="resize-none px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-basic" rows="6"></textarea>
            </div>
        </div>
    );
}