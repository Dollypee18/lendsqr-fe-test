import { useNavigate } from "react-router-dom";
import { removeFromStorage } from "../utils/storage";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeFromStorage("isAuthenticated");
    navigate("/login");
  };

  return (
    <>
      {isOpen && <div className="sidebar__overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__org">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 0L0 3V7C0 10.5 2.84 13.74 8 16C13.16 13.74 16 10.5 16 7V3L8 0Z"
              fill="#213F7D"
            />
          </svg>
          <span>Switch Organization</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 10L3 6H11L7 10Z" fill="#213F7D" />
          </svg>
        </div>

        <div className="sidebar__scrollable">
          <div className="sidebar__menu-item sidebar__menu-item--dashboard">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 0H2C0.9 0 0 0.9 0 2V6C0 7.1 0.9 8 2 8H6C7.1 8 8 7.1 8 6V2C8 0.9 7.1 0 6 0Z"
                fill="#213F7D"
              />
              <path
                d="M14 0H10C8.9 0 8 0.9 8 2V6C8 7.1 8.9 8 10 8H14C15.1 8 16 7.1 16 6V2C16 0.9 15.1 0 14 0Z"
                fill="#213F7D"
              />
              <path
                d="M6 8H2C0.9 8 0 8.9 0 10V14C0 15.1 0.9 16 2 16H6C7.1 16 8 15.1 8 14V10C8 8.9 7.1 8 6 8Z"
                fill="#213F7D"
              />
              <path
                d="M14 8H10C8.9 8 8 8.9 8 10V14C8 15.1 8.9 16 10 16H14C15.1 16 16 15.1 16 14V10C16 8.9 15.1 8 14 8Z"
                fill="#213F7D"
              />
            </svg>
            <span>Dashboard</span>
          </div>

          <div className="sidebar__section">
            <h3 className="sidebar__section-title">CUSTOMERS</h3>
            <div className="sidebar__menu-item sidebar__menu-item--active">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Users</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4C10.9 4 10 4.9 10 6C10 6.4 10.1 6.7 10.3 7L7.7 8.3C7.4 8.1 7.2 8 7 8C6.8 8 6.6 8.1 6.3 8.3L4.7 7C4.9 6.7 5 6.4 5 6C5 4.9 4.1 4 3 4C1.9 4 1 4.9 1 6C1 7.1 1.9 8 3 8C3.2 8 3.4 7.9 3.7 7.7L5.3 9C5.1 9.3 5 9.6 5 10C5 11.1 5.9 12 7 12C8.1 12 9 11.1 9 10C9 9.6 8.9 9.3 8.7 9L11.3 7.7C11.6 7.9 11.8 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Guarantors</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 14C6 14 4.3 12.8 3.5 11C3.5 9 7.5 7.9 8 7.9C8.5 7.9 12.5 9 12.5 11C11.7 12.8 10 14 8 14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Loans</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 0C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H4V16L8 12H14C15.1 12 16 11.1 16 10V2C16 0.9 15.1 0 14 0H2Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Decision Models</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0ZM14 14H2V4H14V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Savings</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V10H9V12ZM9 9H7V4H9V9Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Loan Requests</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 0H4C2.9 0 2 0.9 2 2V14C2 15.1 2.9 16 4 16H12C13.1 16 14 15.1 14 14V2C14 0.9 13.1 0 12 0ZM12 14H4V2H12V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Whitelist</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Karma</span>
            </div>
          </div>

          <div className="sidebar__section">
            <h3 className="sidebar__section-title">BUSINESSES</h3>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0L0 4V6H16V4L8 0ZM0 8V14H4V8H0ZM6 8V14H10V8H6ZM12 8V14H16V8H12Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Organization</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 2H10.8C10.4 0.8 9.3 0 8 0C6.7 0 5.6 0.8 5.2 2H2C0.9 2 0 2.9 0 4V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V4C16 2.9 15.1 2 14 2ZM8 2C8.6 2 9 2.4 9 3C9 3.6 8.6 4 8 4C7.4 4 7 3.6 7 3C7 2.4 7.4 2 8 2ZM14 14H2V4H3V6H13V4H14V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Loan Products</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0ZM14 14H2V4H14V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Savings Products</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Fees and Charges</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 2V0H4V2H0V16H16V2H12ZM6 2H10V4H6V2ZM14 14H2V4H4V6H12V4H14V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Transactions</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 9H9V12H7V9H4V7H7V4H9V7H12V9Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Services</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Service Account</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0ZM14 14H2V4H14V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Settlements</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 0C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H12L16 10V2C16 0.9 15.1 0 14 0H2Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Reports</span>
            </div>
          </div>

          <div className="sidebar__section">
            <h3 className="sidebar__section-title">SETTINGS</h3>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Preferences</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 2V0H4V2H0V16H16V2H12ZM6 2H10V4H6V2ZM14 14H2V4H4V6H12V4H14V14Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Fees and Pricing</span>
            </div>
            <div className="sidebar__menu-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Audit Logs</span>
            </div>
            <div className="sidebar__menu-item" onClick={handleLogout}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 14H2V2H6V0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H6V14ZM7 11L8.4 9.6L6.8 8H14V6H6.8L8.4 4.4L7 3L3 7L7 11Z"
                  fill="#213F7D"
                />
              </svg>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
