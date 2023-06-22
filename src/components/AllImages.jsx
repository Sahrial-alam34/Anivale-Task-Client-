import { useEffect, useState } from "react";
import SingleImages from "./SingleImages";


const AllImages = () => {
    const [toyCars, setToyCars] = useState([]);
    const [search, setSearchText] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/allCars`)
            .then(res => res.json())
            .then(data => {
                //console.log('data', data)
                setToyCars(data)
            })
    }, [])

    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/getCarsByName/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log('src data', data)
                setToyCars(data)
            })
    }
    return (
        <div >
            <h2 className="text-3xl font-bold text-center mb-5">ALL Toy Car  </h2>

            <div className="flex items-center justify-around">

                <form onClick={handleSearch} className="flex space-x-1 mb-5">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                        
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <button type="submit"   className="px-4 text-white bg-purple-600 rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
            <h2 className="text-3xl font-bold text-center mb-5">Search  Toy Car By Name  </h2>
            <div className="flex item-center justify-center min-h-screen container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {toyCars?.map((toy) => (
                        <SingleImages
                            key={toy._id}
                            toy={toy}>

                        </SingleImages>
                    ))}

                </div>


            </div>
        </div>
    );
};

export default AllImages;