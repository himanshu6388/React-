export default function MoodEntry({ entry, onDelete }) {
  const date = new Date(entry.timestamp).toLocaleString();

  return (
    <div className="bg-white p-4 rounded shadow mb-3 flex justify-between items-start">
      <div>
        <div className="text-2xl">{entry.emoji}</div>
        <p className="mt-1 text-gray-700">{entry.note}</p>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <button
        onClick={() => onDelete(entry.timestamp)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ✖
      </button>
    </div>
  );
}
