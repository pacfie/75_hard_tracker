import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Window({title, content, footer, onClose}){
 return (
    <div className="window">
      <div className="window-header">
        <h4 className="m-0">{title}</h4>
        <button type="button" title="Close" onClick={onClose} style={{color: "var(--foreground)"}}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="window-body">
        {content}
      </div>
      <div className="window-footer">
        {footer}
      </div>
    </div>
  );
}