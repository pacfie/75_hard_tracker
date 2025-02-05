import BannerDate from "./BannerDate"
import BannerCounter from "./BannerCounter"
import * as DayUtil from "@/app/utils/DayUtil"

export default function Banner({classes, challengeSize, d }){
    const dEnd = DayUtil.addDays(d, challengeSize)
    let startDate = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
    let endDate = dEnd.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });

    function getRemainingDays(){
        return DayUtil.daysBetween(dEnd, new Date()) + 1; // including the start date
    }

    return (
        <div id="banner" className={classes}>
            <BannerDate date={startDate}></BannerDate>
            <BannerCounter remainingDays={getRemainingDays()}></BannerCounter>
            <BannerDate date={endDate} isStart={false}></BannerDate>
        </div>
    )
}