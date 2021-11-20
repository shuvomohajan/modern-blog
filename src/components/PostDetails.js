import photo from '../images/sanjoy.jpg';
import CommentInput from './CommentInput';
import Comments from './Comments';

export default function PostDetails() {
    return (
        <div className=" bg-white rounded-xl md:max-w-3xl mt-8 mx-auto p-6 md:p-8 shadow-lg">
            {/* Head section */}
            <div className="">
                <div className="flex gap-4">
                    <img src={photo} alt="propic" className="max-h-10 h-10 w-10 object-cover object-center rounded-full ring-2 ring-basic" style={{width:'2.5rem', minWidth:'2.5rem'}} />
                    <div className="">
                        <p className="text-gray-600 font-semibold">Sanjoy Kumar Dhar</p>
                        <p className="text-gray-500 text-sm">Nov 19, 2021 (1 day ago)</p>
                    </div>
                </div>
                <div className="">
                    <p className="text-4xl font-bold text-gray-700 mt-6 hover:text-basic cursor-pointer">You MUST store this Javascript Operator Index</p>
                    <div className="pt-4 pb-6 border-b-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#javascript</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#webdev</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#beginners</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300">#codenewbie</span>
                    </div>
                </div>
            </div>
            
            {/* Main Post section */}
            <div className="pt-10 pb-6 border-b-2">
                {/* Post section */}
                <div className="">
                    <p className="text-gray-700 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque provident eligendi, delectus maiores nam omnis porro necessitatibus inventore harum?</p>
                    <p className="pt-4 text-gray-700 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eaque sapiente omnis iure nostrum quisquam hic suscipit nesciunt, accusamus, earum, pariatur minus? Minima dolorum earum voluptates blanditiis, quod facilis, nesciunt laborum in iste beatae cupiditate labore soluta eos quam odit architecto repudiandae. Amet delectus, dolorem recusandae fugiat voluptatem saepe cumque ex dignissimos quos pariatur necessitatibus, rerum autem, minus sequi repudiandae architecto modi quibusdam explicabo vel consectetur tenetur asperiores repellendus ratione odio! Praesentium nostrum eos nam labore numquam voluptatem libero provident atque et! Voluptates, repudiandae odit cumque laboriosam provident quo exercitationem minus quibusdam maxime maiores, nihil, quaerat quas asperiores ipsum! Unde.</p>
                    <p className="pt-4 text-2xl font-semibold text-gray-800">Heading one:</p>
                    <p className="pt-4 text-gray-700 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem qui odit unde voluptas eaque ratione rem nostrum, eveniet, beatae excepturi corrupti mollitia nulla rerum reprehenderit recusandae error iste porro reiciendis.</p>
                    <p className="pt-4 text-2xl font-semibold text-gray-800">Heading two:</p>
                    <p className="pt-4 text-gray-700 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magnam odit, aperiam optio assumenda itaque amet earum consequatur quaerat perferendis! A, deserunt officia. Exercitationem repellat non fuga, ea perspiciatis ratione, commodi qui, est praesentium voluptate totam odit explicabo impedit laboriosam quis. Beatae, velit provident. Harum laborum et officia aliquam aperiam.</p>
                    <p className="pt-4 text-gray-700 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magnam odit, aperiam optio assumenda itaque amet earum consequatur quaerat perferendis! A, deserunt officia. Exercitationem repellat non fuga, ea perspiciatis ratione, commodi qui, est praesentium voluptate totam odit explicabo impedit laboriosam quis. Beatae, velit provident. Harum laborum et officia aliquam aperiam.</p>
                    <p className="pt-4 text-2xl font-semibold text-gray-800">Heading Three:</p>
                    <p className="pt-4 text-gray-700 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rem! Consequatur voluptas veritatis officia explicabo cupiditate, asperiores iste quibusdam velit id iusto accusantium libero corrupti blanditiis pariatur voluptatum fugiat sapiente necessitatibus illum possimus eveniet aspernatur, beatae tenetur. Soluta, pariatur illum. Ullam quis eum expedita deleniti consequuntur vero, perferendis, facilis provident est minus officia blanditiis veniam iusto saepe cupiditate voluptates eius fuga quos corporis animi quia atque in iste. Laudantium quia alias aliquam possimus vero eius deleniti amet numquam iusto consequatur, in autem, ex quibusdam culpa et nostrum consectetur, porro veniam ea obcaecati optio? Quas, excepturi vero quos blanditiis deserunt distinctio?</p>
                </div>

                {/* Reaction section*/}
                <div className="flex gap-3 pt-4">
                    <div className="flex whitespace-nowrap cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="pt-1 pl-1 pr-10 text-gray-500">34 Reactions</span>
                    </div>
                </div>
            </div>

            {/* Comment section */}
            <div className="">
                <p className="pt-8 pb-10 text-3xl font-bold text-gray-800">Discussions (10)</p>
                <CommentInput />
                <Comments />
            </div>
        </div>
    );
}