import { create } from 'zustand';
import { toast } from "sonner";

interface LocationStore {
  selectedLocation: string | null;
  isLoading: boolean;
  setSelectedLocation: (location: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  selectedLocation: null,
  isLoading: false,
  setSelectedLocation: (location) => {
    set({ isLoading: true });
    
    // Simulate API call to validate location
    setTimeout(() => {
      set({ selectedLocation: location, isLoading: false });
      toast.success("Location updated successfully!", {
        description: "Your preferred location has been saved.",
      });
    }, 500);
  },
  setLoading: (loading) => set({ isLoading: loading }),
}));