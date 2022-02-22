import { useState, useEffect } from 'react';
import browserStorage from 'store';

const usePresistState = (storageKey: string, initialState: any) => {
  const [state, setInternalState] = useState(initialState);

  useEffect(() => {
    const storageInBrowser = browserStorage.get(storageKey);

    if (storageInBrowser) {
      setInternalState(storageInBrowser);
    }
  }, [storageKey]);

  const setState = (newState: typeof initialState) => {
    browserStorage.set(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
};

export default usePresistState;
