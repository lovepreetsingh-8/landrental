import { useRouter } from "next/router";

const PropertyListItem = ({property}) =>{
  // const router = useRouter();
    return (
        <div className="cursor-pointer"
        // onClick={() => router.push(`/properties/${property.id}`)}
        >
          <div className="relative overflow-hidden aspect-square rounded-xl">
            <img fill
                src={property.image_url} alt="land image" 
                sizes="(max-width: 768px): 768px, (max-width:1200px): 768px, 768px" 
                className="hover:scale-110 object-cover transition h-full w-full" />
          </div>

          <div className="mt-2">
            <p className="text-lg font-bold">{property.title}</p>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-500"><strong>${property.price}</strong> per month</p>
          </div>
        </div>
    )
}

export default PropertyListItem;
