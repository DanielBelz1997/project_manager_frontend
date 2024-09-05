import React from "react";
import app_logo from "../../assets/app_logo.png";
import Os from "@/assets/Os.jpg";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      <div className="w-96">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          setApi={setApi}>
          <CarouselContent className="w-85">
            <CarouselItem className="">
              <img src={Os} />
            </CarouselItem>
            <CarouselItem className="">
              <img src={app_logo} />
            </CarouselItem>
            <CarouselItem className="">
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
        <span className="flex justify-center w-4">
          גדששגדדדדדדדדדדדדדדדדדדדדדדדדדדדדדדדדגג גג לגגלמלמג גלחגלחגלגח אנחנו
          צוות פמפמםם ואנחנו רוצים שלום בינינו. .כל הבקשות שלכם, במקום אחד
        </span>
      </div>
      <div>
        <img className="w-48" src={app_logo} />
        <span className="flex justify-center">.כל הבקשות שלכם, במקום אחד</span>
      </div>
    </div>
  );
}
