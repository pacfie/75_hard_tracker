import Rule from "@/app/components/Rule";
import { faCarrot, faBook, faDumbbell, faGlassWater, faCameraRetro } from "@fortawesome/free-solid-svg-icons";

export default function Rules() {
  return (
    <div id="rules-box" className="">
      <h1 className="text-center">Rules</h1>
      <div className="d-grid gap-4 mt-5">
        <Rule
          ruleHeader={"Follow a diet"}
          ruleText={
            "Can be any kind of diet but no cheats and no alcohol is allowed."
          }
          ruleIcon={faCarrot}
        ></Rule>
        <Rule
          ruleHeader={"2 x 45min workouts"}
          ruleText={"One workout must be outside."}
          ruleIcon={faDumbbell}
        ></Rule>
        <Rule
          ruleHeader={"Drink 4l of water"}
          ruleText={"Must be water - coffee does not count."}
          ruleIcon={faGlassWater}
          size="small"
        ></Rule>
        <Rule
          ruleHeader={"Read 10 pages of non-fiction"}
          ruleText={"Personal development, no audiobooks."}
          ruleIcon={faBook}
          size="medium"
        ></Rule>
        <Rule
          ruleHeader={"Take progress pictures"}
          ruleText={
            "Take one photo everyday. Preferably  in the same time from the same angle."
          }
          ruleIcon={faCameraRetro}
          size="medium"
        ></Rule>
      </div>
    </div>
  );
}
