import BannerDate from "./BannerDate"
import BannerCounter from "./BannerCounter"

export default function Banner({classes, challengeSize, d = new Date("2025.01.13."), tickedBoxes }){

    let startDate = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
    let endDate = addDays(d, 75).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
    let remainingDays = challengeSize - tickedBoxes.length;

    function addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    }

    return (
        <div id="banner" className={classes}>
            <BannerDate date={startDate}></BannerDate>
            <BannerCounter remainingDays={remainingDays}></BannerCounter>
            <BannerDate date={endDate} isStart={false}></BannerDate>
        </div>
    )
}