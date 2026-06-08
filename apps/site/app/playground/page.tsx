import { Navbar } from "@/components/nav/Navbar";
import { PlaygroundLazy } from "@/components/playground/PlaygroundLazy";

export const metadata = {
  title: "Playground — DashLab",
  description:
    "Build React dashboards visually. Drag widgets, configure behaviour, and download production-ready @dashlab/core code.",
};

export default function PlaygroundPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 60 }}>
        <PlaygroundLazy />
      </div>
    </>
  );
}
