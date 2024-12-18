import { HomeCarousel } from "@/components/home/HomeCarousel";
import { LandingComponent } from "@/components/home/LandingComponent";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col justify-center items-center">
        <LandingComponent />
        <HomeCarousel />
      </div>
    </>
  );
}

