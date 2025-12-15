const activities = [
  "Floyd Miles commented on Stark Project",
  "Guy Hawkins added a file to 7Homes Project",
  "Kristin Watson commented on 7Homes Project",
];

const Activity = () => {
  return (
    <aside className="bg-white h-full border-l p-6">
      <h3 className="font-semibold mb-4">Activity</h3>

      <div className="space-y-4 text-sm text-gray-600">
        {activities.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </aside>
  );
};

export default Activity;
