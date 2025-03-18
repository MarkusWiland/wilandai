import { create } from 'zustand';

type AuthStore = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

export const useAuthStore = create<AuthStore>((set: (state: Partial<AuthStore>) => void) => ({
  currentStep: 1,
  setCurrentStep: (step) => set({ currentStep: step }),
}));
