import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { describe, it, expect, vi } from "vitest";

vi.mock("src/components/ui/carousel.tsx", () => ({
  Carousel: ({ children }: React.PropsWithChildren<object>) => (
    <div>{children}</div>
  ),
}));
