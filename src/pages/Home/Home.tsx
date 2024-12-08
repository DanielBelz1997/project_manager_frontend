import React from "react";
import header_logo from "../../../public/main_page_logo.svg";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

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
    <div className="w-full h-full p-40 flex justify-around items-center">
      <div className="">
        <img className="w-68" src={header_logo} />
        <span className="flex justify-center mt-5">
          כל הבקשות שלכם, במקום אחד.
        </span>
      </div>
      <div className="w-96">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full max-w-full"
          setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-8">
                      <TypographyP className="flex justify-center w-56 text-center leading-5">
                        אנחנו צוות שיוצר תוכן, כל פעם יהיה כאן משהו אחר. אני
                        מאוד אוהב את אנחנו צוות שיוצר תוכן, כל פעם יהיה כאן משהו
                        אחר. אני מאוד אוהב את אנחנו צוות שיוצר תוכן, כל פעם יהיה
                        כאן משהו אחר. אני מאוד אוהב את התוכן כאן
                      </TypographyP>
                      <Button className="m-5">בקשה חדשה</Button>
                    </CardContent>
                  </Card>
                </div>
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
    </div>
  );
}

