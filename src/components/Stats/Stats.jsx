const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      
      <div className="bg-white p-4 rounded-xl">
        <p className="text-sm text-gray-500">Finished</p>
        <h3 className="text-2xl font-bold">18</h3>
        <p className="text-xs text-green-500">+8 tasks</p>
      </div>

      <div className="bg-white p-4 rounded-xl">
        <p className="text-sm text-gray-500">Tracked</p>
        <h3 className="text-2xl font-bold">31h</h3>
        <p className="text-xs text-red-500">-6 hours</p>
      </div>

      <div className="bg-white p-4 rounded-xl">
        <p className="text-sm text-gray-500">Efficiency</p>
        <h3 className="text-2xl font-bold">93%</h3>
        <p className="text-xs text-green-500">+12%</p>
      </div>

    </div>
  );
};

export default Stats;
