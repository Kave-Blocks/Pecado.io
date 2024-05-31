import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useDarkModeStore = create(
    persist((set, get) => ({
        isDarkMode: false,
        toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
    }),
    {
        name: 'darkMode-storage',
        storage: createJSONStorage(() => localStorage)
    }
    )
)

export default useDarkModeStore
