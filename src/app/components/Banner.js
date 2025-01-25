import BannerDate from "./BannerDate"
import BannerCounter from "./BannerCounter"

export default function Banner({classes}){
    return (
        <div id="banner" className={classes}>
            <BannerDate date={new Date("2025.01.13.").toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}></BannerDate>
            <BannerCounter></BannerCounter>
            <BannerDate date={new Date("2025.03.27.").toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })} isStart={false}></BannerDate>
        </div>
    )
}