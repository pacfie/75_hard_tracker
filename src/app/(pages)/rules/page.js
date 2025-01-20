import Rule from "@/app/components/Rule";

export default function Rules() {
  return (
    <div id="rules-box" className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto">
      <h1 className="text-center">Rules</h1>
      <div className="d-grid gap-4 mt-5">
        <Rule
          ruleHeader={"Follow a diet"}
          ruleText={
            "Can be any kind of diet but no cheats and no alcohol is allowed."
          }
          ruleIcon={["fas", "carrot"]}
        ></Rule>
        <Rule
          ruleHeader={"2 x 45min workouts"}
          ruleText={"One workout must be outside."}
          ruleIcon={["fas", "dumbbell"]}
        ></Rule>
        <Rule
          ruleHeader={"Drink 4l of water"}
          ruleText={"Must be water - coffee does not count."}
          ruleIcon={["fas", "glass-water"]}
          size="small"
        ></Rule>
        <Rule
          ruleHeader={"Read 10 pages of non-fiction"}
          ruleText={"Personal development, no audiobooks."}
          ruleIcon={["fas", "book"]}
          size="medium"
        ></Rule>
        <Rule
          ruleHeader={"Take progress pictures"}
          ruleText={
            "Take one photo everyday. Preferably  in the same time from the same angle."
          }
          ruleIcon={["fas", "camera-retro"]}
          size="medium"
        ></Rule>
      </div>
    </div>
  );
}
