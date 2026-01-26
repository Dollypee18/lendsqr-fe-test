import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, FilterParams } from "../types";
import "./UsersTable.scss";

interface UsersTableProps {
  users: User[];
  onFilter: (filters: FilterParams) => void;
  onReset: () => void;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

const UsersTable = ({
  users,
  onFilter,
  onReset,
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}: UsersTableProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({});
  const filterRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSubmit = () => {
    onFilter(filters);
    setShowFilter(false);
  };

  const handleResetFilter = () => {
    setFilters({});
    onReset();
    setShowFilter(false);
  };

  const getStatusClass = (status: string) => {
    return `status status--${status.toLowerCase()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const handleUserAction = (userId: string, action: string) => {
    setActiveMenu(null);
    if (action === "view") {
      navigate(`/users/${userId}`);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="pagination__page"
        >
          1
        </button>,
      );
      if (startPage > 2)
        pages.push(
          <span key="dots1" className="pagination__dots">
            ...
          </span>,
        );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`pagination__page ${i === currentPage ? "pagination__page--active" : ""}`}
        >
          {i}
        </button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1)
        pages.push(
          <span key="dots2" className="pagination__dots">
            ...
          </span>,
        );
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="pagination__page"
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="users-table">
      <div className="users-table__wrapper">
        <table className="users-table__table">
          <thead>
            <tr>
              {[
                "ORGANIZATION",
                "USERNAME",
                "EMAIL",
                "PHONE NUMBER",
                "DATE JOINED",
                "STATUS",
              ].map((header) => (
                <th key={header}>
                  <div className="users-table__header">
                    {header}
                    <button
                      className="users-table__filter-btn"
                      onClick={() => setShowFilter(true)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.5 12H9.5V10.5H6.5V12ZM1 4V5.5H15V4H1ZM3.5 8.75H12.5V7.25H3.5V8.75Z"
                          fill="#545F7D"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{formatDate(user.dateJoined)}</td>
                <td>
                  <span className={getStatusClass(user.status)}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="users-table__actions">
                    <button
                      className="users-table__menu-btn"
                      onClick={() =>
                        setActiveMenu(activeMenu === user.id ? null : user.id)
                      }
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle cx="10" cy="3" r="1.5" fill="#545F7D" />
                        <circle cx="10" cy="10" r="1.5" fill="#545F7D" />
                        <circle cx="10" cy="17" r="1.5" fill="#545F7D" />
                      </svg>
                    </button>
                    {activeMenu === user.id && (
                      <div className="users-table__menu" ref={menuRef}>
                        <button
                          onClick={() => handleUserAction(user.id, "view")}
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleUserAction(user.id, "blacklist")}
                        >
                          Blacklist User
                        </button>
                        <button
                          onClick={() => handleUserAction(user.id, "activate")}
                        >
                          Activate User
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ SINGLE FILTER MODAL OUTSIDE TABLE */}
      {showFilter && (
        <>
          <div
            className="filter-modal__overlay"
            onClick={() => setShowFilter(false)}
          />
          <div className="filter-modal" ref={filterRef}>
            <div className="filter-modal__content">
              {/* Filter Fields */}
              <div className="filter-modal__field">
                <label>Organization</label>
                <select
                  value={filters.organization || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, organization: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="Lendsqr">Lendsqr</option>
                  <option value="Irorun">Irorun</option>
                  <option value="Lendstar">Lendstar</option>
                </select>
              </div>

              <div className="filter-modal__field">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="User"
                  value={filters.username || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, username: e.target.value })
                  }
                />
              </div>

              <div className="filter-modal__field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={filters.email || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, email: e.target.value })
                  }
                />
              </div>

              <div className="filter-modal__field">
                <label>Date</label>
                <input
                  type="date"
                  value={filters.date || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, date: e.target.value })
                  }
                />
              </div>

              <div className="filter-modal__field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={filters.phoneNumber || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div className="filter-modal__field">
                <label>Status</label>
                <select
                  value={filters.status || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                  <option value="Blacklisted">Blacklisted</option>
                </select>
              </div>

              <div className="filter-modal__actions">
                <button
                  className="filter-modal__reset"
                  onClick={handleResetFilter}
                >
                  Reset
                </button>
                <button
                  className="filter-modal__filter"
                  onClick={handleFilterSubmit}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="pagination">
        <div className="pagination__info">
          Showing
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          out of {totalItems}
        </div>
        <div className="pagination__controls">
          <button
            className="pagination__nav"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {renderPagination()}
          <button
            className="pagination__nav"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
