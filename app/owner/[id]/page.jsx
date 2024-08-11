import PropertyList from "@/app/components/properties/properties";

const OwnerDetailPage =() => {
    return (
        <main className="max-w-[1500px] mx-auto p-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oB0vvTCSSUVfsqjffjvtqTN3NPGazGayvw&s"
                         alt="Profile Picture" width={200} height={200} className="rounded-full"/>
                         <h2 className="text-lg font-bold text-landRental mt-4">Michael</h2>
                         <h3 className="text-lg text-gray-700 mt-2"><strong className=" text-landRental ">Email:</strong> fdfsd@gmail.com</h3>
                         <h3 className="text-lg text-gray-700 mt-2"><strong className=" text-landRental ">Phone:</strong> 4035885466</h3>
                    </div>
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6"> 
                        <PropertyList/>
                    </div>
                </div>
            </div>
        </main>        
    );
}

export default OwnerDetailPage;

