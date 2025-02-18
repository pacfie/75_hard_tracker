export default function BannerCounter({ remainingDays }) {
  const renderSwitch = function () {
    switch (remainingDays) {
      case 0:
        return <label style={{fontSize: "1.25rem"}}>Last day!</label>;
      case 1:
        return (
          <>
            <span className="remaining-days">{remainingDays}</span>
            <label>day left</label>
          </>
        );
      default:
        return (
          <>
            <span className="remaining-days">{remainingDays}</span>
            <label>days left</label>
          </>
        );
    }
  };

  return (
    <div className="banner-counter">
      {remainingDays >= 0 ? (
        renderSwitch()
      ) : (
        <label className="finished-text">Finished</label>
      )}
    </div>
  );
}
