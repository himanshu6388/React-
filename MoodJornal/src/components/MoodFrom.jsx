import { useState } from "react";

const emojis = ["😊", "😔", "😡", "😐", "🥳"];

export default function MoodForm({ onAdd }) {
  const [emoji, setEmoji] = useState("😊");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    const entry = {
      emoji,
      note,
      timestamp: Date.now(),
    };

    onAdd(entry);
    setNote("");
    setEmoji("😊");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <label className="block mb-2 font-semibold">Your Mood</label>
      <select
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="mb-4 p-2 rounded border w-full"
      >
        {emojis.map((em, idx) => (
          <option key={idx} value={em}>{em}</option>
        ))}
      </select>

      <label className="block mb-2 font-semibold">Note</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write something..."
        className="w-full p-2 border rounded mb-4"
        rows={3}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Entry
      </button>
    </form>
  );
}
