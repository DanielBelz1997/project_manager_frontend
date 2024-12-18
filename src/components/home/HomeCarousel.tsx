import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import React from "react";

export const HomeCarousel = () => {
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
    <div className="flex w-full h-[100vh] justify-center items-center flex-col pt-80 px-96">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
          direction: "rtl",
          duration: 100,
        }}
        setApi={setApi}>
        <CarouselContent className="flex w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3`}>
              <Card className={`${index !== current - 1 && "mt-5"}`}>
                <CardContent
                  className={`flex flex-col items-center justify-center p-8 ${
                    index !== current - 1 && "opacity-20"
                  }`}>
                  <p className="text-center">
                    אנחנו צוות שיוצר תוכן, כל פעם יהיה כאן משהו אחר. אני מאוד
                    אוהב את אנחנו צוות שיוצר תוכן, כל פעם יהיה כאן משהו אחר. אני
                    מאוד אוהב את אנחנו צוות שיוצר תוכן, כל פעם יהיה כאן משהו
                    אחר. אני מאוד אוהב את התוכן כאן
                  </p>
                  <Button className="mt-5">בקשה חדשה</Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} מתוך {count}
      </div>
    </div>
  );
};
