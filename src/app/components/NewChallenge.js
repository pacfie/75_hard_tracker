import Window from "./Window";

export default function NewChallenge({ onYes, onNo }) {
  return (
    <Window
      title={"Starting fresh"}
      content={
        <p>
          Are you sure you want to start a new challenge? All of your progress
          will be lost. Do you wish to proceed?
        </p>
      }
      footer={
        <>
          <button
            type="button"
            className="ellipse-btn full-btn yes-btn"
            onClick={onYes}
          >
            Yes, start fresh
          </button>
          <button type="button" className="ellipse-btn no-btn" onClick={onNo}>
            No, keep my progress
          </button>
        </>
      }
      onClose={onNo}
    />
  );
}
