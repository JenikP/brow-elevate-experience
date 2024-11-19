type LocationStore = {
  selectedLocation: string | null;
  setSelectedLocation: (location: string) => void;
};

let listeners: (() => void)[] = [];
let currentLocation = localStorage.getItem('selectedLocation');

const locationStore: LocationStore = {
  selectedLocation: currentLocation,
  setSelectedLocation: (location: string) => {
    currentLocation = location;
    localStorage.setItem('selectedLocation', location);
    locationStore.selectedLocation = location;
    listeners.forEach(listener => listener());
  }
};

export const useLocationStore = () => {
  const [, setUpdate] = React.useState({});

  React.useEffect(() => {
    const listener = () => setUpdate({});
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  return locationStore;
};