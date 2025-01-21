export default function Date({date, isStart = true}){
    return (
        <div className="banner-date d-grid gap-2">
            <label className="mx-auto">{isStart ? "Start" : "End"}</label>
            <span className="mx-auto">{date}</span>
        </div>
    )
}