import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import AnimatedCard from "../components/common/AnimatedCard";
import Button from "../components/common/Button";
import { ROUTES } from "../utils/constants";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  /** Set mock auth tokens so downstream pages that read localStorage work */
  const setGuestAuth = (role: "Host" | "Player") => {
    localStorage.setItem("token", "guest-bypass-token");
    localStorage.setItem("role", role);
    localStorage.setItem("username", role === "Host" ? "GuestHost" : "GuestPlayer");
  };

  const goHost = () => {
    setGuestAuth("Host");
    navigate(ROUTES.HOST);
  };

  const goRejoin = () => {
    setGuestAuth("Host");
    navigate(ROUTES.HOSTREJOIN);
  };

  const goJoin = () => {
    setGuestAuth("Player");
    navigate(ROUTES.JOIN);
  };

  const goAudience = () => {
    setGuestAuth("Player");
    navigate(ROUTES.AUDIENCE);
  };

  return (
    <PageLayout>
      <div className="text-center py-16">
        <AnimatedCard>
          <div className="text-6xl mb-6 animate-float">🎮</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
            Sanskrit Shabd Samvad
          </h1>
          <p className="text-xl text-slate-300 mb-2">Interactive Team Quiz</p>
          <br />
        </AnimatedCard>

        {/* Host Section */}
        <p className="text-slate-400 mb-3 text-sm uppercase tracking-widest">Host</p>
        <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto mb-8">
          <AnimatedCard className="flex-1" delay={200}>
            <Button
              onClick={goHost}
              variant="primary"
              size="xl"
              className="w-full py-6 text-xl group"
              icon={<span className="text-3xl mr-3 group-hover:animate-bounce">👑</span>}
            >
              <span className="block text-sm text-blue-200 mt-1">Create Room</span>
            </Button>
          </AnimatedCard>
          <AnimatedCard className="flex-1" delay={400}>
            <Button
              onClick={goRejoin}
              variant="secondary"
              size="xl"
              className="w-full py-6 text-xl group"
              icon={<span className="text-3xl mr-3 group-hover:animate-bounce">🔄</span>}
            >
              <span className="block text-sm text-blue-200 mt-1">Rejoin Room</span>
            </Button>
          </AnimatedCard>
        </div>

        {/* Player Section */}
        <p className="text-slate-400 mb-3 text-sm uppercase tracking-widest">Player / Audience</p>
        <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
          <AnimatedCard className="flex-1" delay={600}>
            <Button
              onClick={goJoin}
              variant="success"
              size="xl"
              className="w-full py-6 text-xl group"
              icon={<span className="text-3xl mr-3 group-hover:animate-bounce">🎯</span>}
            >
              <span className="block text-sm text-green-200 mt-1">Enter as a contestant</span>
            </Button>
          </AnimatedCard>
          <AnimatedCard className="flex-1" delay={800}>
            <Button
              onClick={goAudience}
              variant="primary"
              size="xl"
              className="w-full py-6 text-xl group"
              icon={<span className="text-3xl mr-3 group-hover:animate-bounce">👀</span>}
            >
              <span className="block text-sm text-blue-200 mt-1">Watch as audience</span>
            </Button>
          </AnimatedCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;

