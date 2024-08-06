'use client';

import { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
  

const Modal= ({label, content, isOpen}) => {
   

const [showModal, setShowModal] = useState(isOpen)


    const handleModalClose = useCallback(() => {
        setShowModal(false);
        },[])
    
useEffect(()=> {
    setShowModal(isOpen)
}, [isOpen])

    if (!showModal){
      return null;
    }
    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
           <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto">
                <div className={`translate duration-500 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10' }`}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                        

                        <header className="h-[65px] flex items-center p-6 rounded-t justify-center relative border-b">
                            <div className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer" onClick={handleModalClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <h2 className="text-lg font-bold">{label}</h2>
                        </header>

                        <section className="p-6">
                            {content}
                        </section>
                    </div>
                </div>
           </div>
        </div>
    )    
}
Modal.propTypes = {
    label: PropTypes.string.isRequired, 
    content: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
export default Modal;