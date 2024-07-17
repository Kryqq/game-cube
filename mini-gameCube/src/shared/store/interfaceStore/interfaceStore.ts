
import { create } from 'zustand'


type useInterfaceStore = {
	loginWindowIsOpen: boolean;
	openLoginWindow: () => void;
	closeLoginWindow: () => void;
   }
   

const useInterfaceStore = create<useInterfaceStore>((set) => ({
	loginWindowIsOpen: false,

	openLoginWindow: () => {
	  set({ loginWindowIsOpen: true });
	},
   
	closeLoginWindow: () => {
	  set({ loginWindowIsOpen: false });
	}
}))

export default useInterfaceStore;