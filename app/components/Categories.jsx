"use client";
import { useState } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BoltIcon from '@mui/icons-material/Bolt';
import Image from "next/image";

const Categories = () => {
    
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 ">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-300 opacity-60 hover:opacity-100">
            <AttachMoneyIcon style={{ fontSize: 30 }} />
                <span className="text-xs">Price</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-300 opacity-60 hover:opacity-100 ">
            <SquareFootIcon style={{ fontSize: 30 }} />
                <span className="text-xs">Size</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-300 opacity-60 hover:opacity-100">
            <Image src="/amenities.png" alt="Amenities" width={40} height={40} />
                <span className="text-xs">Amenities</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-300 opacity-60 hover:opacity-100">
            <BoltIcon style={{ fontSize: 30}} />
                <span className="text-xs">Climate</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-300 opacity-60 hover:opacity-100">
            <LocationOnIcon style={{ fontSize: 30 }} />
                <span className="text-xs">Location</span>
            </div>
           
        </div>
    )
}

export default Categories;