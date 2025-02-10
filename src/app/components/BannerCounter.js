export default function BannerCounter({ remainingDays }) {
  return (
    <div className="banner-counter">
      {remainingDays > 0 ? (
        <>
          <span className="remaining-days">{remainingDays}</span>
          <label>{remainingDays > 1 ? "days" : "day"} left</label>
        </>
      ) : (
        <label className="finished-text">Finished</label>
      )}
    </div>
  );
}
