import { useState } from "react";
import { LoadingScreen } from "@/components/screens/LoadingScreen";
import { HelloScreen } from "@/components/screens/HelloScreen";
import { CakeScreen } from "@/components/screens/CakeScreen";
import { HappyBirthdayScreen } from "@/components/screens/HappyBirthdayScreen";
import { GiftsScreen, type GiftId } from "@/components/screens/GiftsScreen";
import { MemoriesScreen } from "@/components/screens/MemoriesScreen";
import { LetterScreen } from "@/components/screens/LetterScreen";
import { SongScreen } from "@/components/screens/SongScreen";
import { FutureScreen } from "@/components/screens/FutureScreen";
import { Confetti, FloatingHearts } from "@/components/FloatingHearts";

type Screen = "loading" | "hello" | "cake" | "birthday" | "gifts" | GiftId;

// 💖 CHANGE HER NAME HERE 💖
const HER_NAME = "My Love";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("loading");
  const [confetti, setConfetti] = useState(false);

  const fireConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts density={10} />
      <Confetti active={confetti} />

      <div className="relative z-10">
        {screen === "loading" && <LoadingScreen onDone={() => setScreen("hello")} />}
        {screen === "hello" && <HelloScreen name={HER_NAME} onYes={() => setScreen("cake")} />}
        {screen === "cake" && (
          <CakeScreen onCut={() => { fireConfetti(); setScreen("birthday"); }} />
        )}
        {screen === "birthday" && (
          <HappyBirthdayScreen name={HER_NAME} onContinue={() => setScreen("gifts")} />
        )}
        {screen === "gifts" && <GiftsScreen onPick={(id) => setScreen(id)} />}
        {screen === "memories" && <MemoriesScreen onBack={() => setScreen("gifts")} />}
        {screen === "letter" && <LetterScreen name={HER_NAME} onBack={() => setScreen("gifts")} />}
        {screen === "song" && <SongScreen onBack={() => setScreen("gifts")} />}
        {screen === "future" && <FutureScreen onBack={() => setScreen("gifts")} />}
      </div>
    </main>
  );
};

export default Index;
