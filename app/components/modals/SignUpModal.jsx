'use client';

import useSignUpModal from "@/app/hooks/userSignUpModal";
import Modal from "./modal";
import Button from "./Button";


const SignUpModal = () => {
    
    const SignUpModal= useSignUpModal();
    const content = (
        <div>
            
            <form className="space-y-4">
                <input type="email" placeholder="Email " required  className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input type="password" placeholder="Password" required className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input type="password" placeholder="Re-enter Password" required className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <Button label= "Submit" onClick={() => console.log("clicked")} />
            </form>
        </div>
        
    )
    return(
        <Modal 
        isOpen={SignUpModal.isOpen}
        close={SignUpModal.close}
        label= "SignUp"
        content={content} />

    )
}

export default SignUpModal;