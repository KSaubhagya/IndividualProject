import React, { useState, useEffect } from "react";
import {
  DashboardLayout,
  Sidebar,
  SidebarLink,
  MainContent,
  DashboardHeader,
  StatsGrid,
  StatCard,
  TableWrapper,
} from "../styles/AdminDashboardStyles";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [dashboardStats, setDashboardStats] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch statistics - using /stats endpoint instead of /dashboard-stats
        const statsResponse = await fetch(
          "http://localhost:9000/api/admin/stats"
        );

        if (!statsResponse.ok) {
          throw new Error(`Stats API failed: ${statsResponse.status}`);
        }
        const statsData = await statsResponse.json();
        setDashboardStats(statsData);

        // Fetch user list - using /user-list endpoint instead of /users
        const usersResponse = await fetch(
          "http://localhost:9000/api/admin/user-list"
        );

        if (!usersResponse.ok) {
          throw new Error(`User list API failed: ${usersResponse.status}`);
        }
        const usersData = await usersResponse.json();
        setUsersList(usersData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <h2>Error Loading Dashboard</h2>
        <p>{error}</p>
        <p>Please check if the backend server is running on port 9000.</p>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <Sidebar>
        <h2>Admin Panel</h2>
        <SidebarLink as={Link} to="/admin">
          Dashboard
        </SidebarLink>
        <SidebarLink as={Link} to="/adminBlog">
          Modules
        </SidebarLink>
        <SidebarLink
          onClick={() =>
            document
              .getElementById("users")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Users
        </SidebarLink>

        <SidebarLink
          onClick={() =>
            document
              .getElementById("analytics")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Analytics
        </SidebarLink>
      </Sidebar>

      <MainContent>
        <DashboardHeader>
          <h1>Dashboard Overview</h1>
        </DashboardHeader>

        <StatsGrid id="analytics">
          <StatCard>
            <h3>Users</h3>
            <p>{dashboardStats?.totalUsers ?? "0"}</p>
          </StatCard>
          <StatCard>
            <h3>Files</h3>
            <p>{dashboardStats?.totalFiles ?? "0"}</p>
          </StatCard>
          <StatCard>
            <h3>Crashes</h3>
            <p>0</p>
          </StatCard>
          <StatCard>
            <h3>Reported</h3>
            <p>0</p>
          </StatCard>
        </StatsGrid>

        <TableWrapper>
          <table id="users">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Status</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
                <tr key={user.id}>
                  <td>{user.username || "Unknown"}</td>
                  <td>{user.email || "No email"}</td>
                  <td>{user.status || "active"}</td>
                  <td>
                    {new Date(user.last_modified).toLocaleDateString() ||
                      "Unknown"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </MainContent>
    </DashboardLayout>
  );
};

export default AdminDashboard;
