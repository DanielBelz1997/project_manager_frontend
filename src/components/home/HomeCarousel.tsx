import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardImage } from "../ui/card";
import { Button } from "../ui/button";
import { useCarousel } from "@/hooks/useCarousel";
import { useGroups } from "@/hooks/api-hooks/useGroup";

type Group<T> = {
  description: string;
  form: T[];
  id: number;
  image_url: string;
  name: string;
};

export const HomeCarousel = () => {
  const { data, isLoading, isError } = useGroups();
  const { setApi, count, current } = useCarousel({
    initialCountValue: data?.data.length ? data?.data.length : 0,
  });

  console.log(current);

  const mainCaruselText = "מספקי השירותים שלכם";

  if (isLoading) {
    return <>wait...</>;
  }

  if (isError) {
    return <>error</>;
  }

  return (
    <div className="flex w-full h-[90vh] justify-center items-center flex-col pt-0 px-96">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-[100vh] absolute">
        {mainCaruselText}
      </h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "center",
          direction: "rtl",
          loop: true,
          duration: 100,
        }}
        className=""
        setApi={setApi}>
        <CarouselContent>
          {data?.data.map((group: Group<object>, index: number) => (
            <CarouselItem key={group.id} className="md:basis-1/2 lg:basis-1/2">
              <Card
                className={`transition-all ${
                  index !== current - 1 && "mt-5 "
                }`}>
                <CardContent
                  className={`flex flex-col items-center justify-center p-8  ${
                    index !== current - 1 && "opacity-20"
                  }`}>
                  <CardImage src={group.image_url} />
                  <p className="text-center mt-5">{group.description}</p>
                  <Button className="mt-5">בקשה חדשה</Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground absolute mt-[80vh]">
        {current} מתוך {count}
      </div>
    </div>
  );
};

