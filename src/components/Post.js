import photo from '../images/sanjoy.jpg';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Post() {
    return (
        <div className="flex justify-left bg-white rounded-xl md:max-w-2xl mt-8 mx-auto p-6 md:p-8 shadow-lg">
            <div className="">
                <img src={photo} alt="propic" className="max-h-12 h-12 w-12 object-cover object-center rounded-full ring-2 ring-basic" style={{width:'3rem', minWidth:'3rem'}} />
            </div>
            <div className="ml-4">
                <div className="">
                    <p className="text-gray-600 font-semibold">Sanjoy Kumar Dhar</p>
                    <p className="text-gray-500 text-sm">Nov 19, 2021 (1 day ago)</p>
                    <p className="text-3xl font-bold text-gray-700 mt-4 hover:text-basic cursor-pointer">You MUST store this Javascript Operator Index</p>
                    <div className="pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#javascript</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#webdev</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#beginners</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#codenewbie</span>
                    </div>
                </div>
                <div className="flex gap-3 pt-4">
                    <div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="pt-1 pl-1 pr-10 text-gray-500">34 Reactions</span>
                    </div>
                    <div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="pt-1 pl-1 text-gray-500">3 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}