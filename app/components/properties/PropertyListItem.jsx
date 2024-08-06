const PropertyListItem =() =>{
    return (
        <div className="cursor-pointer">
          <div className="relative overflow-hidden aspect-square rounded-xl">
            <img fill
                src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=pexels-akos-szabo-145938-440731.jpg&fm=jpg" alt="land image" 
                sizes="(max-width: 768px): 768px, (max-width:1200px): 768px, 768px" 
                className="hover:scale-110 object-cover transition h-full w-full" />
          </div>

          <div className="mt-2">
            <p className="text-lg font-bold">Property Name</p>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-500"><strong>$200</strong> per night</p>
          </div>
        </div>
    )
}

export default PropertyListItem;
