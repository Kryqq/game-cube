import { create } from "zustand";
const useGameStore = create((set) => ({
    initialBalance: 100,
    betOption: 'even',
    face: 1,
    betSize: 1,
    roll: false,
    result: null,
    addPointsToBalance: (amount) => {
        set((state) => ({ initialBalance: state.initialBalance + amount }));
    },
    subtractPointsFromBalance: (amount) => {
        set((state) => ({ initialBalance: state.initialBalance - amount }));
    },
    setFace: (newFace) => {
        set({ face: newFace });
    },
    setBetSize: (betSize) => {
        set({ betSize: betSize });
    },
    setRoll: (roll) => {
        set({ roll: roll });
    },
    setBetOption: (betOption) => {
        set({ betOption: betOption });
    },
    setReult: (result) => {
        set({ result: result });
    },
}));
export default useGameStore;
