import { useEffect, useState } from "react";
import MoodForm from "../components/MoodForm";
import MoodEntry from "../components/MoodEntry";
import { getEntries, saveEntry, deleteEntry } from "../utils/storage.js";

export default function Home() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const handleAdd = (entry) => {
    saveEntry(entry);
    setEntries(prev => [entry, ...prev]);
  };

  const handleDelete = (timestamp) => {
    deleteEntry(timestamp);
    setEntries(prev => prev.filter(entry => entry.timestamp !== timestamp));
  };

  return (
    <div className="max-w-xl mx-auto">
      <MoodForm onAdd={handleAdd} />
      <div>
        {entries.length === 0 ? (
          <p className="text-center text-gray-500">No mood entries yet.</p>
        ) : (
          entries.map(entry => (
            <MoodEntry key={entry.timestamp} entry={entry} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}
