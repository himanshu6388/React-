const STORAGE_KEY = 'mood_entries';

export const getEntries = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEntry = (entry) => {
  const current = getEntries();
  const updated = [...current, entry];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteEntry = (timestamp) => {
  const current = getEntries();
  const updated = current.filter(entry => entry.timestamp !== timestamp);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
