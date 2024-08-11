import LocationOnIcon from '@mui/icons-material/LocationOn';
const ReservationSideBar =()=> {
    return (
    
        <aside className="h-[50vh] mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="text-2xl mb-3 text-landRentalHover">Reservation</h2>
            <h3 className="text-lg mb-3">$1200 per month</h3>
            <div className="cursor-pointer pb-5 bg-la border-white  hover:border-gray-300 opacity-60 hover:opacity-100">
            <LocationOnIcon style={{ fontSize: 30 }} />
                <span className="mr-2 text-lg">123 Main St</span>
            </div>
            
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <h3 className="text-lg mb-2">Contact</h3>
                <p className="w-full p-2 "><strong>Email</strong>: vdfdn@gmail.com </p>
                <p className="w-full p-2 "><strong>Phone</strong>: 587-625-3568 </p>
                   
            </div>

        </aside>
    
    )
}

export default ReservationSideBar;

