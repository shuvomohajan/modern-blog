import photo from '../images/sanjoy.jpg';

export default function Profile() {
    return (
        <div className="flex justify-center max-w-5xl mt-8 mx-auto p-8 bg-white rounded-xl shadow-lg">
            <div className="flex-none">
                <img src={photo} alt="propic" className="h-24 md:h-60 rounded-full ring-4 ring-basic" />
            </div>
            <div className="pl-12 md:pl-16">
                <div className="">
                    <p className="text-2xl font-semibold">
                        Sanjoy Kumar Dhar
                    </p>
                    <p className="text-gray-500 font-medium text-xs mb-4">
                        Studied BSC in Computer Science and Engineering
                    </p>
                    <p className="text-gray-600 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla veniam, vero sunt, nesciunt, culpa reiciendis nisi placeat consequuntur repellendus expedita porro sequi maiores est iusto ut. Recusandae laborum molestias hic aliquid voluptate, explicabo libero repellendus ratione expedita obcaecati possimus similique, non deserunt eos. Quaerat iste cupiditate aut beatae architecto.</p>
                </div>
                <div className="">
                    <button className="px-4 py-1 border border-basic rounded-full text-md text-gradientPrimaryEnd font-semibold mt-4 hover:bg-basic hover:text-white transition duration-300">Edit Profile</button>
                </div>
            </div>
        </div>
    );
}