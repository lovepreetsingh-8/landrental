const SearchFilters =() => {
    return (
        <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
           <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-between">
                        <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Location</p>
                        </div>

                        <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Lease</p>
                        </div>

                        <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Price</p>
                        </div>

                        <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Area</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className="p-2">
                    <div className="cursor-pointer p-2 lg:p-4 bg-landRental hover:bg-landRentalHover  transition rounded-full text-white">
                        <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" 
                        style= {{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: 5.33333, overflow: 'visible'}}>
                        
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                    </div>

                </div>
        </div>
         
           
    )
}

export default SearchFilters;