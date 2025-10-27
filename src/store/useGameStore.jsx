import { create } from 'zustand';

const useGameStore = create((set) => ({
    emojis : [
        { value : "A", visible : false, matched : false },
        { value : "B", visible : false, matched : false },
        { value : "C", visible : false, matched : false },
        { value : "D", visible : false, matched : false },
        { value : "E", visible : false, matched : false },
        { value : "F", visible : false, matched : false },
        { value : "G", visible : false, matched : false },
        { value : "H", visible : false, matched : false },
    ],
    items : [],
    started : false,
    score : 0,
    seconds : 60,
    
    start : () => set((state) => ({
        started : true,
        items : [...state.emojis, ...state.emojis]
    }))
}));

export default useGameStore;