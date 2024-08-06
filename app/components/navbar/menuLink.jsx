'use client';

const MenuLink = ({label, onClick}) => {
    return (
        <div onClick={onClick} className="cursor-pointer px-5 py-4 hover:bg-gray-100 transition">
            {label}
        </div>
    )
}


export default MenuLink;