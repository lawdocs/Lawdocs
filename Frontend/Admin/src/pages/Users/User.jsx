import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/user/get-user`
        );
        console.log("res", response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error fetching users. Please try again.
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Users</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-4 px-6 lg:px-[9vw] text-left">ID</th>
              <th className="py-4 px-6 text-left">First Name</th>
              <th className="py-4 px-6 text-left">Last Name</th>
              <th className="py-4 px-6 lg:px-[6vw] text-left">Email</th>
              <th className="py-4 px-3 text-left  ">Profile Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b text-[1.2vw]   hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-gray-900">{user.id}</td>
                <td className="py-4 px-6 text-gray-900">{user.first_name}</td>
                <td className="py-4 px-6 text-gray-900">{user.last_name}</td>
                <td className="py-4 px-6 text-gray-900">
                  {user.email_addresses[0]?.email_address}
                </td>
                <td className="py-4 px-6">
                  <img
                    src={user.profile_image_url}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
