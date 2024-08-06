import {create} from "zustand";


const useSignUpModal = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false})
    }));
    
export default useSignUpModal;