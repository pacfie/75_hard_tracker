import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardCard({ header, text, icon }) {
  return (
    <div className="card">
      <FontAwesomeIcon icon={icon} />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
}
