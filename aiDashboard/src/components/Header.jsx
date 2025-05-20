// src/components/Topbar.jsx
const Header = () => {
  return (
    <div className="w-full h-14 bg-white shadow-md flex justify-between items-center px-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-1 rounded hidden md:block"
      />
      <div className="flex gap-4 items-center">
        <span className="cursor-pointer">🔔</span>
        <span className="cursor-pointer">👤</span>
      </div>
    </div>
  );
};

export default Header;
