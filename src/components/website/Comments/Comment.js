import photo from '../../../images/refa.jpg';

export default function Comment() {
    return (
        <div className="pb-6 flex gap-4">
            {/* User pic */}
            <div className="">
                <img src={photo} alt="propic" className="max-h-10 h-10 w-10 object-cover object-center rounded-full ring-2 ring-basic" style={{width:'2.5rem', minWidth:'2.5rem'}} />
            </div>
            {/* Comment body */}
            <div className="">
                <div className="border-2 p-4 border-gray-200 rounded-xl">
                    {/* Author name */}
                    <p className="text-lg font-semibold text-gray-600">Refayet Siddique</p>
                    {/* Date of comment */}
                    <p className="text-sm text-gray-500 pb-2">added Nov 20, 2021</p>
                    {/* Comment body */}
                    <p className="text-gray-700 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus laboriosam ipsa, hic similique minus enim consequatur ipsum quasi veritatis dolores aliquam, vel eum sapiente reprehenderit, ratione odio vitae molestiae magnam quidem id. Sint ea, nesciunt voluptatem voluptate omnis illum minima quasi? Sequi iusto nihil rerum corporis deleniti autem voluptatum accusamus qui dignissimos, non libero! Deleniti saepe tenetur impedit blanditiis sint aliquam maxime nostrum repudiandae aliquid? Porro enim voluptates facere nisi quaerat eum, quo velit quibusdam dignissimos sapiente. Error dolores, dolorum eaque ipsum possimus officiis eligendi non natus neque repellendus vero reprehenderit vel sunt maiores temporibus id cum corrupti optio excepturi?</p>
                </div>

                {/* comment reaction and replay icon */}
                <div className="flex gap-1 pt-2">
                    <div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="pl-1 text-sm text-gray-500">4 Reactions</span>
                    </div>
                    <div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="pl-1 text-sm text-gray-500">3 replays</span>
                    </div>
                </div>
            </div>
        </div>
    );
}