import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { getUserById } from "../services/mockApi";
import { User } from "../types";
import "./UserDetails.scss";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("general");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const userData = getUserById(id);
      if (userData) {
        setUser(userData);
      } else {
        navigate("/dashboard");
      }
    }
  }, [id, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const userTier = 3;

  return (
    <div className="user-details">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="user-details__main">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="user-details__content">
          <button
            className="user-details__back"
            onClick={() => navigate("/dashboard")}
          >
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
              <path
                d="M0.94 5.94L4.94 9.94L6 8.88L3.88 6.76H28V5.24H3.88L6 3.12L4.94 2.06L0.94 6.06C0.353333 6.64667 0.353333 7.35333 0.94 5.94Z"
                fill="#545F7D"
              />
            </svg>
            Back to Users
          </button>

          <div className="user-details__header">
            <h1 className="user-details__title">User Details</h1>
            <div className="user-details__actions">
              <button className="user-details__action user-details__action--blacklist">
                BLACKLIST USER
              </button>
              <button className="user-details__action user-details__action--activate">
                ACTIVATE USER
              </button>
            </div>
          </div>

          <div className="user-details__card">
            <div className="user-details__profile">
              <div className="user-details__avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 20C23.3137 20 26 17.3137 26 14C26 10.6863 23.3137 8 20 8C16.6863 8 14 10.6863 14 14C14 17.3137 16.6863 20 20 20Z"
                    fill="#213F7D"
                  />
                  <path
                    d="M20 22C15.58 22 8 24.21 8 28V30H32V28C32 24.21 24.42 22 20 22Z"
                    fill="#213F7D"
                  />
                </svg>
              </div>
              <div className="user-details__info">
                <h2 className="user-details__name">{user.fullName}</h2>
                <p className="user-details__username">{user.username}</p>
              </div>
              <div className="user-details__divider"></div>
              <div className="user-details__tier">
                <p className="user-details__tier-label">User's Tier</p>
                <div className="user-details__stars">
                  {[1, 2, 3].map((star) => (
                    <svg
                      key={star}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill={star <= userTier ? "#E9B200" : "#E5E5E5"}
                    >
                      <path d="M8 0L10.472 5.52786L16 6.58359L12 10.8541L12.944 16L8 13.5279L3.056 16L4 10.8541L0 6.58359L5.528 5.52786L8 0Z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="user-details__divider"></div>
              <div className="user-details__bank">
                <p className="user-details__bank-amount">
                  ₦{parseInt(user.loanRepayment).toLocaleString()}
                </p>
                <p className="user-details__bank-number">
                  {user.bvn}/Providus Bank
                </p>
              </div>
            </div>

            <div className="user-details__tabs">
              <button
                className={`user-details__tab ${activeTab === "general" ? "user-details__tab--active" : ""}`}
                onClick={() => setActiveTab("general")}
              >
                General Details
              </button>
              <button
                className="user-details__tab"
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </button>
              <button
                className="user-details__tab"
                onClick={() => setActiveTab("bank")}
              >
                Bank Details
              </button>
              <button
                className="user-details__tab"
                onClick={() => setActiveTab("loans")}
              >
                Loans
              </button>
              <button
                className="user-details__tab"
                onClick={() => setActiveTab("savings")}
              >
                Savings
              </button>
              <button
                className="user-details__tab"
                onClick={() => setActiveTab("app")}
              >
                App and System
              </button>
            </div>
          </div>

          <div className="user-details__details">
            <div className="user-details__section">
              <h3 className="user-details__section-title">
                Personal Information
              </h3>
              <div className="user-details__grid">
                <div className="user-details__field">
                  <label>FULL NAME</label>
                  <p>{user.fullName}</p>
                </div>
                <div className="user-details__field">
                  <label>PHONE NUMBER</label>
                  <p>{user.phoneNumber}</p>
                </div>
                <div className="user-details__field">
                  <label>EMAIL ADDRESS</label>
                  <p>{user.email}</p>
                </div>
                <div className="user-details__field">
                  <label>BVN</label>
                  <p>{user.bvn}</p>
                </div>
                <div className="user-details__field">
                  <label>GENDER</label>
                  <p>{user.gender}</p>
                </div>
                <div className="user-details__field">
                  <label>MARITAL STATUS</label>
                  <p>{user.maritalStatus}</p>
                </div>
                <div className="user-details__field">
                  <label>CHILDREN</label>
                  <p>{user.children}</p>
                </div>
                <div className="user-details__field">
                  <label>TYPE OF RESIDENCE</label>
                  <p>{user.typeOfResidence}</p>
                </div>
              </div>
            </div>

            <div className="user-details__section">
              <h3 className="user-details__section-title">
                Education and Employment
              </h3>
              <div className="user-details__grid">
                <div className="user-details__field">
                  <label>LEVEL OF EDUCATION</label>
                  <p>{user.levelOfEducation}</p>
                </div>
                <div className="user-details__field">
                  <label>EMPLOYMENT STATUS</label>
                  <p>{user.employmentStatus}</p>
                </div>
                <div className="user-details__field">
                  <label>SECTOR OF EMPLOYMENT</label>
                  <p>{user.sectorOfEmployment}</p>
                </div>
                <div className="user-details__field">
                  <label>DURATION OF EMPLOYMENT</label>
                  <p>{user.durationOfEmployment}</p>
                </div>
                <div className="user-details__field">
                  <label>OFFICE EMAIL</label>
                  <p>{user.officeEmail}</p>
                </div>
                <div className="user-details__field">
                  <label>MONTHLY INCOME</label>
                  <p>{user.monthlyIncome}</p>
                </div>
                <div className="user-details__field">
                  <label>LOAN REPAYMENT</label>
                  <p>₦{parseInt(user.loanRepayment).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="user-details__section">
              <h3 className="user-details__section-title">Socials</h3>
              <div className="user-details__grid">
                <div className="user-details__field">
                  <label>TWITTER</label>
                  <p>{user.twitter}</p>
                </div>
                <div className="user-details__field">
                  <label>FACEBOOK</label>
                  <p>{user.facebook}</p>
                </div>
                <div className="user-details__field">
                  <label>INSTAGRAM</label>
                  <p>{user.instagram}</p>
                </div>
              </div>
            </div>

            <div className="user-details__section">
              <h3 className="user-details__section-title">Guarantor</h3>
              <div className="user-details__grid">
                <div className="user-details__field">
                  <label>FULL NAME</label>
                  <p>{user.guarantorFullName}</p>
                </div>
                <div className="user-details__field">
                  <label>PHONE NUMBER</label>
                  <p>{user.guarantorPhoneNumber}</p>
                </div>
                <div className="user-details__field">
                  <label>EMAIL ADDRESS</label>
                  <p>{user.guarantorEmail}</p>
                </div>
                <div className="user-details__field">
                  <label>RELATIONSHIP</label>
                  <p>{user.guarantorRelationship}</p>
                </div>
              </div>
            </div>

            <div className="user-details__section">
              <h3 className="user-details__section-title">Guarantor</h3>
              <div className="user-details__grid">
                <div className="user-details__field">
                  <label>FULL NAME</label>
                  <p>{user.guarantorFullName}</p>
                </div>
                <div className="user-details__field">
                  <label>PHONE NUMBER</label>
                  <p>{user.guarantorPhoneNumber}</p>
                </div>
                <div className="user-details__field">
                  <label>EMAIL ADDRESS</label>
                  <p>{user.guarantorEmail}</p>
                </div>
                <div className="user-details__field">
                  <label>RELATIONSHIP</label>
                  <p>{user.guarantorRelationship}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
