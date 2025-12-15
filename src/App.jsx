import { useEffect, useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Stats from "./components/stats/Stats";
import Tasks from "./components/tasks/Tasks";
import Activity from "./components/activity/Activity";
import Performance from "./components/performance/Performance";

import { dashboardData } from "./data/dashboarddata";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // simulate data loading
    setTimeout(() => {
      setData(dashboardData);
    }, 300);
  }, []);

  if (!data) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header />
        <Stats stats={data.stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Tasks tasks={data.tasks} />
          <Activity activity={data.activity} />
          <Performance />
        </div>
      </main>
    </div>
  );
}

export default App;
