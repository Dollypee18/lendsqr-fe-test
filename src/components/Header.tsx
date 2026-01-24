import { useState } from "react";
import "./Header.scss";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-btn" onClick={onMenuClick}>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M1 1H19M1 7H19M1 13H19"
              stroke="#213F7D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <img src="/logo.svg" alt="Lendsqr" className="header__logo" />
        <div className="header__search">
          <input
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="header__search-input"
          />
          <button className="header__search-btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5.5 0C2.4625 0 0 2.4625 0 5.5C0 8.5375 2.4625 11 5.5 11C6.82491 11 8.03799 10.5 8.99993 9.67992L12.5 13.18L13.18 12.5L9.67992 8.99993C10.5 8.03799 11 6.82491 11 5.5C11 2.4625 8.5375 0 5.5 0ZM5.5 1.375C7.77 1.375 9.625 3.23 9.625 5.5C9.625 7.77 7.77 9.625 5.5 9.625C3.23 9.625 1.375 7.77 1.375 5.5C1.375 3.23 3.23 1.375 5.5 1.375Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="header__right">
        <a href="#" className="header__docs">
          Docs
        </a>
        <button className="header__notification">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M20.7 19.3C20.3 19.1 19 18.2 19 13C19 9.9 16.8 7.3 14 6.6V6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6V6.6C7.2 7.3 5 9.9 5 13C5 18.2 3.7 19.1 3.3 19.3C3.1 19.4 3 19.7 3 20V21C3 21.6 3.4 22 4 22H20C20.6 22 21 21.6 21 21V20C21 19.7 20.9 19.4 20.7 19.3Z"
              fill="#213F7D"
            />
          </svg>
        </button>
        <div className="header__user">
          <img src="/avatar.png" alt="User" className="header__avatar" />
          <div className="header__user-info">
            <span className="header__username">Adedeji</span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path
                d="M0.5 0.5L4 4L7.5 0.5"
                stroke="#213F7D"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
