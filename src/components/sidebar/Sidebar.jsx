const Sidebar = () => {
  return (
    <aside className="bg-white h-full border-r p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-8">logip</h1>

        <nav className="space-y-4 text-gray-600">
          <p className="font-medium text-black">Home</p>
          <p>Projects</p>
          <p>Tasks</p>
          <p>Team</p>
          <p>Settings</p>
        </nav>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
        <p className="font-medium">Upgrade to Pro</p>
        <p className="text-sm text-gray-500 mt-1">
          Get 1 month free and unlock all features
        </p>
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
          Upgrade
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
