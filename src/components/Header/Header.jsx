const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">
          Hello, Margaret
        </h2>
        <p className="text-sm text-gray-500">
          Track team progress here. You almost reach a goal!
        </p>
      </div>

      <p className="text-sm text-gray-400">16 May, 2023</p>
    </div>
  );
};

export default Header;
