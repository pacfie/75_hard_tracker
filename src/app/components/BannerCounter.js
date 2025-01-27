export default function BannerCounter({remainingDays}){
    return (
        <div className="banner-counter">
            <span className="remaining-days">{remainingDays}</span>
            <label>days left</label>
        </div>
    )
}