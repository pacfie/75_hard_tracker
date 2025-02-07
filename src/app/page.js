"use client";

import Image from "next/image";
import rockyPhoto from "@/images/rocky.png";
import pullupPhoto from "@/images/pullup.png";
import pushupPhoto from "@/images/pushup.png";
import { useRules } from "./utils/contexts/RulesContext";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faChartLine,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import  Carousel from "./components/Carousel.js";

export default function Home() {
  const { setShowRules } = useRules();
  const router = useRouter();

  // navigation to the challenge
  const goToChallenge = () => {
    router.push("/challenge");
  };

  return (
    <div id="dashboard" className="col-xxl-10 mx-auto">
      <div className="hero">
        <div className="hero-content">
          <h2>75 hard</h2>
          <h1>challenge tracker</h1>
          <p className="hero-text">
            Your mind and body are capable of more than you realize. Build
            habits that challenge you, inspire you, and bring out the best
            version of yourself.
          </p>
          <div className="d-flex gap-4 flex-wrap">
            <button type="button" className="full-btn" onClick={goToChallenge}>
              Go to challenge
            </button>
            <button type="button" onClick={() => setShowRules(true)}>
              Check rules
            </button>
          </div>
        </div>
        <div className="hero-img mx-auto" style={{ maxWidth: "30rem" }}>
          <Image
            src={rockyPhoto}
            alt="Photo of Rocky Balboa raising his fist in the sky"
            width={0}
            height={0}
          />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className="howTo">
        <div className="card">
          <FontAwesomeIcon icon={faChartLine} />
          <h3>Track Your Progress</h3>
          <p>Quickly mark your habits completed each day.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faLock} />
          <h3>Stay Consistent</h3>
          <p>Build lasting habits with the power of daily tracking.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faSeedling} />
          <h3>See Your Growth</h3>
          <p>Watch as your consistency builds over time.</p>
        </div>
      </div>
      
    </div>
  );
}
