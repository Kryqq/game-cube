import { create } from "zustand";

type useGameStoreType = {
	roll: boolean;
	initialBalance: number;
	face: number;
	betSize: string | number;
	betOption: string;
	result: 'win' | 'lose' | null;
	addPointsToBalance: (amount: number) => void;
	subtractPointsFromBalance: (amount: number) => void;
	setFace: (face: number) => void;
	setBetSize: (bet: string ) => void;
	setRoll: (roll: boolean) => void;
	setBetOption: (betOption: string) => void;
	setReult: (result: 'win' | 'lose' | null) => void;

}
   
   

const useGameStore = create<useGameStoreType>((set) => ({
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


  setFace: (newFace: number) => {
	set({ face: newFace });
  },

  setBetSize: (betSize: string | number) => {
    set({ betSize: betSize });
  },
  setRoll: (roll: boolean) => {	
    set( { roll: roll });
  },

  setBetOption: (betOption: string) => {
    set({ betOption: betOption });
  },
  setReult: (result: 'win' | 'lose' | null) => {
    set({ result: result });
  },

}))

export default useGameStore ;