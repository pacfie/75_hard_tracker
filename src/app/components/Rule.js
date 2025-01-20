import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rule({ ruleHeader, ruleText, ruleIcon, size = "big" }) {
  return (
    <div className="d-flex gap-4 align-items-start">
      <div className="icon-container">
        <FontAwesomeIcon icon={ruleIcon} className={size}></FontAwesomeIcon>
      </div>
      <div>
        <h3>{ruleHeader}</h3>
        <p>{ruleText}</p>
      </div>
    </div>
  );
}
