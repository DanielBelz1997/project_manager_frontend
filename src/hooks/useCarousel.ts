import React from "react";

import { CarouselApi } from "@/components/ui/carousel";

export const useCarousel = ({
  initialCountValue,
}: {
  initialCountValue: number;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(initialCountValue);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    setCount(initialCountValue);
  }, [initialCountValue]);

  return { setApi, current, count };
};
