import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

const PropertyDetailPage =() => {
    return (
        <main className="max-w-[1500px] mx-auto p-6 pb-6">
           <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
           <img fill
                src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=pexels-akos-szabo-145938-440731.jpg&fm=jpg" alt="land image" 
                className="object-cover h-full w-full" />
           </div>

            <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className=" mb-4 text-2xl ">Property Details</h1>
                    <span className="mb-6 block text-gray-500">
                        <span className="text-gray-900 ">Address:</span> 123 Main St
                        <br />
                        <span className="text-gray-900">City:</span> Anytown
                        <br />
                        <span className="text-gray-900 ">State:</span> CA
                    </span>
                    <hr />
                    
                    <div className="py-6 flex items-center space-x-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oB0vvTCSSUVfsqjffjvtqTN3NPGazGayvw&s"
                            width={50} height={50} className="rounded-full" alt="owner image"/>
                    
                    <p><strong>Michael</strong> is your host. </p>
                    </div>
                    <hr/>

                    <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis doloremque libero quis maxime labore sed quaerat officia cumque quasi? Amet doloribus quod et! Quam omnis odit quas dolores quaerat.
                    Eum, tenetur, eveniet cumque ducimus ipsam quibusdam nesciunt enim autem vero debitis laborum saepe beatae eaque sit doloribus. Reprehenderit, dicta. Dolore, nobis voluptas? Tempore recusandae quos perferendis corporis impedit accusantium.
                    Quam facere soluta vel deleniti aliquam! Accusamus voluptatibus aperiam dolor laudantium cupiditate voluptatum voluptatem quia? Consequuntur, sint cumque dicta, ullam voluptate alias dolorem voluptatem perspiciatis dolor repudiandae vel ex ducimus! </p>

                </div>

                <ReservationSideBar/>
            </div>

        </main>
    )
}
export default PropertyDetailPage;

