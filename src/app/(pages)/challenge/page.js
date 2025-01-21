import Banner from "@/app/components/Banner";
import CheckboxGrid from "@/app/components/CheckboxGrid";
import DailyData from "@/app/components/DailyData";

export default function Challenge() {
    return (
      <div className="d-grid gap-4 col-lg-10 col-xl-10 col-xxl-8 mx-auto" style={{gridTemplateColumns: "1fr 2fr"}}>
        <Banner></Banner>
        <CheckboxGrid></CheckboxGrid>
        <DailyData day={5} />
      </div>
    );
  }
  