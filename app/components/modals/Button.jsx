import React from 'react'

function Button({label,onClick }) {
  return (
    <div className='w-full py-4 bg-landRental hover:bg-landRentalHover text-center text-white rounded-xl transition cursor-pointer'
        onClick = {onClick}>
        {label}
    </div>
  )
}

export default Button;