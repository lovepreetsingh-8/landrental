'use client';
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";


const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const getProperties = async () => {
        const tmpProperties = await apiService.get('/api/properties/');
        setProperties(tmpProperties.data);
        
    }
    useEffect(() => {
        getProperties();
    },[]);
    return(
        < > 
            {properties.map((property, index) => (
                <PropertyListItem key={index} property={property} />
                ))}

            
             
        </>
    )
}

export default PropertyList;

