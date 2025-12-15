const tasks = [
  { id: 1, title: "Product Review for UI8 Market", status: "In progress", time: "4h" },
  { id: 2, title: "UX Research for Product", status: "On hold", time: "8h" },
  { id: 3, title: "App design and development", status: "Done", time: "32h" },
];

const Tasks = () => {
  return (
    <div className="bg-white rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Current Tasks</h3>
        <span className="text-sm text-gray-400">Done 30%</span>
      </div>

      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">{task.title}</p>
              <p className="text-xs text-gray-400">{task.status}</p>
            </div>
            <span className="text-sm text-gray-500">{task.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
