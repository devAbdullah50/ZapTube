export default function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between w-full items-center">
                <div className="text-white text-lg font-bold">
                    ZapTube
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}