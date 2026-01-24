import "./StatsCard.scss";

interface StatsCardProps {
  icon: string;
  title: string;
  value: string;
}

const icons = {
  users: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill="#DF18FF" fillOpacity="0.1" />
      <path
        d="M20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20ZM20 22C17.33 22 12 23.34 12 26V28H28V26C28 23.34 22.67 22 20 22Z"
        fill="#DF18FF"
      />
    </svg>
  ),
  "active-users": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill="#5718FF" fillOpacity="0.1" />
      <path
        d="M14 24C15.66 24 17 22.66 17 21C17 19.34 15.66 18 14 18C12.34 18 11 19.34 11 21C11 22.66 12.34 24 14 24ZM26 24C27.66 24 29 22.66 29 21C29 19.34 27.66 18 26 18C24.34 18 23 19.34 23 21C23 22.66 24.34 24 26 24ZM27 25H25C24.45 25 23.95 25.22 23.59 25.59C24.93 26.28 25.94 27.4 26.36 28.77C27.45 28.53 28.28 27.58 28.28 26.42V25.71C28.28 25.32 27.96 25 27.57 25H27ZM20 24C22.21 24 24 22.21 24 20C24 17.79 22.21 16 20 16C17.79 16 16 17.79 16 20C16 22.21 17.79 24 20 24ZM22.4 25.14C22.03 25.05 21.54 25 21 25H19C18.46 25 17.97 25.05 17.6 25.14C16.07 25.45 15 26.77 15 28.33V29C15 29.55 15.45 30 16 30H24C24.55 30 25 29.55 25 29V28.33C25 26.77 23.93 25.45 22.4 25.14ZM16.41 25.59C16.05 25.22 15.55 25 15 25H13C11.9 25 11 25.9 11 27V27.71C11 28.82 11.83 29.77 12.92 30.01C13.34 27.4 15.07 25.28 16.41 25.59Z"
        fill="#5718FF"
      />
    </svg>
  ),
  loans: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill="#F55F44" fillOpacity="0.1" />
      <path
        d="M26 14H23V13C23 11.9 22.1 11 21 11H19C17.9 11 17 11.9 17 13V14H14C12.9 14 12 14.9 12 16V28C12 29.1 12.9 30 14 30H26C27.1 30 28 29.1 28 28V16C28 14.9 27.1 14 26 14ZM19 13H21V14H19V13ZM26 28H14V16H17V18H19V16H21V18H23V16H26V28Z"
        fill="#F55F44"
      />
    </svg>
  ),
  savings: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill="#FF3366" fillOpacity="0.1" />
      <path
        d="M26 16H24.82C24.93 15.69 25 15.35 25 15C25 13.35 23.65 12 22 12C20.83 12 19.82 12.65 19.28 13.61L20.89 14.66C21.11 14.26 21.52 14 22 14C22.55 14 23 14.45 23 15C23 15.55 22.55 16 22 16H21V18H22C22.55 18 23 18.45 23 19C23 19.55 22.55 20 22 20C21.52 20 21.11 19.74 20.89 19.34L19.28 20.39C19.82 21.35 20.83 22 22 22C23.65 22 25 20.65 25 19C25 18.65 24.93 18.31 24.82 18H26C27.1 18 28 18.9 28 20V26C28 27.1 27.1 28 26 28H14C12.9 28 12 27.1 12 26V20C12 18.9 12.9 18 14 18H15V16H14C11.79 16 10 17.79 10 20V26C10 28.21 11.79 30 14 30H26C28.21 30 30 28.21 30 26V20C30 17.79 28.21 16 26 16Z"
        fill="#FF3366"
      />
    </svg>
  ),
};

const StatsCard = ({ icon, title, value }: StatsCardProps) => {
  return (
    <div className="stats-card">
      <div className="stats-card__icon">
        {icons[icon as keyof typeof icons]}
      </div>
      <h3 className="stats-card__title">{title}</h3>
      <p className="stats-card__value">{value}</p>
    </div>
  );
};

export default StatsCard;
