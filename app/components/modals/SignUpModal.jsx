'use client';
import { useRouter } from 'next/navigation'
import useSignUpModal from "@/app/hooks/userSignUpModal";
import Modal from "./modal";
import Button from "./Button";
import { useState } from "react";


const SignUpModal = () => {    
    const SignUpModal= useSignUpModal();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [error, setError] = useState([]);

    const router = useRouter();
    
    const handleSubmit = () => {
        router.push('/'); 
    };
                               

    const submit = async () => {
        const formData = {
            email: email,
            password: password,
            rePassword: rePassword
        }
        // const response = await apiService.post()
    }
    
    const content = (
        <div>
            
            <form action={submit} className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value) } type="email" placeholder="Email " required  className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input onChange={(e) => setPassword(e.target.value) }  type="password" placeholder="Password" required className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input onChange={(e) => setRePassword(e.target.value) }  type="password" placeholder="Re-enter Password" required className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                {error.map((error,index) =>
                    <div key={index} className="text-red-500 text-sm">{error}</div>
                )}
                <Button label= "Submit" onClick={handleSubmit} />
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