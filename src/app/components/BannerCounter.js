export default function BannerCounter({remainingDays}){
    return (
        <div className="banner-counter">
            <span className="remaining-days">{remainingDays}</span>
            <label>{remainingDays > 1 ? "days" : "day"} left</label>
        </div>
    )
}