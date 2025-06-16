import { create } from "zustand";

type passwordState ={
    length : number;
    includeNumber : boolean;
    includeUpper : boolean;
    includeLower : boolean;
    includeSymbol : boolean;
    generatedPassword : string;
    setLength : (length : number) => void;
    toggleNumbers  : () => void;
    toggleUpper : () => void;
    toggleLower : () => void;
    toggleSymbols : () => void;
    generatePassword : () => void;
}

const usePasswordStore = create<passwordState>((set) => ({
    length : 10,
    includeNumber : true,
    includeUpper : true,
    includeLower : true,
    includeSymbol : false,
    generatedPassword : "",

    setLength : (length) => set(() => ({ length })),
    toggleNumbers : () => set((state) => ({ includeNumber : !state.includeNumber })),
    toggleUpper : () => set((state) => ({ includeUpper : !state.includeUpper })),
    toggleLower : () => set((state) => ({ includeLower : !state.includeLower })),
    toggleSymbols : () => set((state) => ({ includeSymbol : !state.includeSymbol })),

    generatePassword : () => set((state) => {
        const { length, includeNumber, includeUpper, includeLower, includeSymbol } = state;
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

        let charSet = lowerCase;
        if (includeUpper) charSet += upperCase;
        if (includeNumber) charSet += numbers;
        if (includeSymbol) charSet += symbols;

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
        
        return { generatedPassword : password };
    })

}))
