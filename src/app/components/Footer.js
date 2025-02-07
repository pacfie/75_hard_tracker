import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss, faHtml5, faJs, faReact, faFigma, faFontAwesome, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <label style={{fontSize: "1.25rem"}}>Built with ❤️ by Dalma</label>
      <p className="mt-3 mb-2" style={{fontSize: "0.9rem"}}>Technologies used for this project</p>
      <ul>
        <li title="React">
          <FontAwesomeIcon icon={faReact} />
        </li>
        <li title="JavaScript">
          <FontAwesomeIcon icon={faJs} />
        </li>
        <li title="HTML5">
          <FontAwesomeIcon icon={faHtml5} />
        </li>
        <li title="CSS">
          <FontAwesomeIcon icon={faCss} />
        </li>
        <li title="Bootstrap">
          <FontAwesomeIcon icon={faBootstrap} />
        </li>
        <li title="Figma">
          <FontAwesomeIcon icon={faFigma} />
        </li>
        <li title="Font Awesome">
          <FontAwesomeIcon icon={faFontAwesome} />
        </li>
        <li title="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </li>
      </ul>
    </footer>
  );
}
