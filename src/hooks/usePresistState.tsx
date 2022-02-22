import { useState, useEffect } from 'react';

const usePresistState = (storageKey: string, initialState: any) => {
  const [state, setInternalState] = useState(initialState);

  useEffect(() => {
    const storageInBrowser = window.localStorage.getItem(storageKey);

    if (storageInBrowser) {
      setInternalState(storageInBrowser);
    }
  }, [storageKey]);

  const setState = (newState: typeof initialState) => {
    window.localStorage.setItem(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
};

export default usePresistState;
