// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-52 md:w-60 p-4 flex flex-col">
      <div className="text-lg font-bold hidden md:block mb-6">BeyondChats</div>
      <nav className="flex flex-col gap-4">
        <button className="hover:bg-gray-700 p-2 rounded">💬 Chats</button>
        <button className="hover:bg-gray-700 p-2 rounded">👥 Users</button>
        <button className="hover:bg-gray-700 p-2 rounded">⚙️ Settings</button>
      </nav>
    </div>
  );
};

export default Sidebar;
