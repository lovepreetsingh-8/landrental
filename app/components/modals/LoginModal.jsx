'use client';

import useLoginModal from "@/app/hooks/userLoginModal";
import Modal from "./modal";
import Button from "./Button";
import { useRouter } from 'next/navigation';
import { useState } from "react";


const LoginModal = () => {
    
    const loginModal= useLoginModal();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState([]);

    const router = useRouter();
    const handleSubmit = () => {
        router.push('/'); 
    };

    const content = (
        <div>
            
            <form className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value) } type="email" placeholder="Email " required  className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input  onChange={(e) => setPassword(e.target.value) } type="password" placeholder="Password" required className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                {error.map((error,index) =>
                    <div key={index} className="text-red-500 text-sm">{error}</div>
                )}
                <Button label= "Submit" onClick={handleSubmit} />
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