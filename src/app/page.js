"use client";

import Image from "next/image";
import rockyPhoto from "@/images/rocky.png";
import highlight1 from "@/images/screenshot1.png";
import highlight2 from "@/images/screenshot2.png";
import highlight3 from "@/images/screenshot3.png";
// import highlight4 from "@/images/screenshot4.png";
import { useRules } from "./utils/contexts/RulesContext";
import { useRouter } from "next/navigation";
import {
  faSeedling,
  faChartLine,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./components/Carousel.js";
import DashboardCard from "./components/DashboardCard";
import DashboardHighlight from "./components/DashboardHighlight";

export default function Home() {
  const { setShowRules } = useRules();
  const router = useRouter();

  // navigation to the challenge
  const goToChallenge = () => {
    router.push("/challenge");
  };

  return (
    <div id="dashboard" className="col-xl-10 col-xxl-8 mx-auto">
      <section className="hero">
        <div className="hero-content">
          <h2>75 hard</h2>
          <h1>challenge tracker</h1>
          <p className="hero-text">
            Your mind and body are capable of more than you realize. Build
            habits that challenge you, inspire you, and bring out the best
            version of yourself.
          </p>
          <div className="d-flex gap-4 flex-wrap">
            <button
              type="button"
              className="ellipse-btn full-btn"
              onClick={goToChallenge}
            >
              Go to challenge
            </button>
            <button
              type="button"
              className="ellipse-btn inverted-btn"
              onClick={() => setShowRules(true)}
            >
              Check rules
            </button>
          </div>
        </div>
        <div className="hero-img mx-auto w-100" style={{ maxWidth: "30rem" }}>
          <Image
            src={rockyPhoto}
            alt="Photo of Rocky Balboa raising his fist in the sky"
            width={0}
            height={0}
          />
        </div>
      </section>
      <section>
        <Carousel />
      </section>
      <section className="howTo">
        <DashboardCard
          header={"Track Your Progress"}
          text={"Quickly mark your habits completed each day."}
          icon={faChartLine}
        />
        <DashboardCard
          header={"Stay Consistent"}
          text={"Build lasting habits with the power of daily tracking."}
          icon={faLock}
        />
        <DashboardCard
          header={"See Your Growth"}
          text={"Watch as your consistency builds over time."}
          icon={faSeedling}
        />
      </section>
      <section className="highlights my-3 my-md-5">
        <DashboardHighlight
          image={highlight1}
          alt={"Screenshot of the Rules window"}
          title={"Explaining the rules"}
          text={
            "Take on the 75 Hard Challenge and push your limits! This app helps you stay on track with all five daily tasks — no excuses, no shortcuts. Log your workouts, track your progress, and keep yourself accountable every single day. Think you have what it takes? Start now and challenge yourself to be unstoppable!"
          }
        />
        <DashboardHighlight
          image={highlight2}          
          title={"Customize challenge"}
          alt={"Screenshot of the Rules window"}
          text={
            "The 75 Hard Challenge is designed to build discipline and mental toughness over 75 days—but we know that everyone’s journey is different. Whether you commit to the full challenge or set a shorter goal, this app lets you customize your experience while still pushing yourself to grow. Choose the duration that works for you and stay consistent!"
          }
          order={2}
        />
        <DashboardHighlight
          image={highlight3}
          alt={"Screenshot of the Rules window"}
          title={"Responsive design"}
          text={
            "Track your progress in style—whether you prefer a light, clean look or a sleek dark mode. Switch effortlessly between themes and stay focused on your challenge, day or night! No clunky layouts, no frustrating zooming—just a smooth and simple experience designed to work perfectly on any device."
          }
          
        />
      </section>
      <section className="cta text-center py-2 py-md-5">
        <h1>
          Start building better habits today - your future self will be
          grateful!
        </h1>
        <button
          type="button"
          className="ellipse-btn full-btn big-btn"
          onClick={goToChallenge}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
