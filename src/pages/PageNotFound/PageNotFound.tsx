import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-[200px]">
        404
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
        אופס! הדף שחיפשתם לא נמצא...
      </h2>
      <Button className="mt-8" onClick={() => navigate("/")}>
        לדף הבית
      </Button>
    </div>
  );
};
