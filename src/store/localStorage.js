export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    console.log('State loaded from localStorage successfully');
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('State loaded from localStorage failed');
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {}
};
