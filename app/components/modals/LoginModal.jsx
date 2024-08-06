'use client';

import useLoginModal from "@/app/hooks/userLoginModal";
import Modal from "./modal";
import Button from "./Button";


const LoginModal = () => {
    
    const loginModal= useLoginModal();
    const content = (
        <div>
            
            <form className="space-y-4">
                <input type="email" placeholder="Email " required  className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input type="password" placeholder="Password" required className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <Button label= "Submit" onClick={() => console.log("clicked")} />
            </form>
        </div>
        
    )
    return(
        <Modal 
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label= "Welcome to LandRental Login page!!"
        content={content} />

    )
}

export default LoginModal;