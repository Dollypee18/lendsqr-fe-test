import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import UsersTable from "../components/UsersTable";
import { getUsers, getStats } from "../services/mockApi";
import { User, Stats, FilterParams } from "../types";
import "./Dashboard.scss";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats>({
    users: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const allUsers = getUsers();
    setUsers(allUsers);
    setFilteredUsers(allUsers);
    setStats(getStats());
  }, []);

  const handleFilter = (filters: FilterParams) => {
    let filtered = [...users];

    if (filters.organization) {
      filtered = filtered.filter((u) =>
        u.organization
          .toLowerCase()
          .includes(filters.organization!.toLowerCase()),
      );
    }

    if (filters.username) {
      filtered = filtered.filter((u) =>
        u.username.toLowerCase().includes(filters.username!.toLowerCase()),
      );
    }

    if (filters.email) {
      filtered = filtered.filter((u) =>
        u.email.toLowerCase().includes(filters.email!.toLowerCase()),
      );
    }

    if (filters.phoneNumber) {
      filtered = filtered.filter((u) =>
        u.phoneNumber.includes(filters.phoneNumber!),
      );
    }

    if (filters.status) {
      filtered = filtered.filter((u) => u.status === filters.status);
    }

    if (filters.date) {
      filtered = filtered.filter((u) => u.dateJoined.startsWith(filters.date!));
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilteredUsers(users);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="dashboard__main">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="dashboard__content">
          <h1 className="dashboard__title">Users</h1>
          <div className="dashboard__stats">
            <StatsCard
              icon="users"
              title="USERS"
              value={stats.users.toLocaleString()}
            />
            <StatsCard
              icon="active-users"
              title="ACTIVE USERS"
              value={stats.activeUsers.toLocaleString()}
            />
            <StatsCard
              icon="loans"
              title="USERS WITH LOANS"
              value={stats.usersWithLoans.toLocaleString()}
            />
            <StatsCard
              icon="savings"
              title="USERS WITH SAVINGS"
              value={stats.usersWithSavings.toLocaleString()}
            />
          </div>
          <UsersTable
            users={currentUsers}
            onFilter={handleFilter}
            onReset={handleReset}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredUsers.length}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
