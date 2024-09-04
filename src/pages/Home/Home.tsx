import React from "react";
import app_logo from "../../assets/app_logo.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full h-full p-12 flex justify-around items-center">
      <div className="w-80">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <img src={app_logo} />
            </CarouselItem>
            <CarouselItem>
              <img src={app_logo} />
            </CarouselItem>
            <CarouselItem>
              <img src={app_logo} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} of {count}
        </div>
      </div>
      <div>
        <img className="w-48" src={app_logo} />
        <span className="flex justify-center">.כל הבקשות שלכם, במקום אחד</span>
      </div>
    </div>
  );
}
