import { create } from 'zustand';
const useInterfaceStore = create((set) => ({
    loginWindowIsOpen: false,
    openLoginWindow: () => {
        set({ loginWindowIsOpen: true });
    },
    closeLoginWindow: () => {
        set({ loginWindowIsOpen: false });
    }
}));
export default useInterfaceStore;
