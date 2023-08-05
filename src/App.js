import { useQuery, useQueryClient } from "react-query";
import "./App.css";
import { fetchUserById, fetchUsers } from "./api/api";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import { useStore } from "./store";

const App = () => {
  const { data: users, isLoading } = useQuery('users', fetchUsers);
  const { user, openSidebar } = useStore();
  const queryClient = useQueryClient();

  const handleBtnClick = async (userId) => {
    openSidebar();
    const data = await queryClient.fetchQuery(['user', userId], () => fetchUserById(userId));
    useStore.setState({ user: data });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => (
            <Card
              key={user.id}
              title={user.name}
              description={user.company.name}
              btnText="View Details"
              onBtnClick={() => handleBtnClick(user.id)}
            />
          ))
        )}
      </div>
      <Sidebar user={user} />
    </div>
  );
};

export default App;
