import { TbTable } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { FaRegNoteSticky } from "react-icons/fa6";
import styled from "styled-components";
import GridLayout from "react-grid-layout";
import { CiLock, CiUnlock } from "react-icons/ci";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AdminHomePage = () => {
  const [layoutLocked, isLayoutLocked] = useState<boolean>(false);

  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 },
    { i: "meme", x: 4, y: 0, w: 1, h: 1 },
  ];

  const sideBarButton =
    "transition-transform transform size-8 m-4 cursor-pointer hover:scale-110";

  const DragHandle = styled.div`
    cursor: move;
    color: white;
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
  `;

  return (
    <>
      <div className="fixed border-l border-t border-b top-[15vh] -bottom-7 h-[70vh] rounded-tl-2xl rounded-bl-2xl ">
        <div className="border-b" onClick={() => isLayoutLocked(!layoutLocked)}>
          {layoutLocked ? (
            <Tooltip>
              <TooltipTrigger>
                <CiLock className={sideBarButton} />
              </TooltipTrigger>
              <TooltipContent side="left" className="mr-3">
                שחרור גליון
              </TooltipContent>
            </Tooltip>
          ) : (
            <Tooltip>
              <TooltipTrigger>
                <CiUnlock className={sideBarButton} />
              </TooltipTrigger>
              <TooltipContent side="left" className="mr-3">
                נעילת גליון
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className="flex flex-col">
          <Tooltip>
            <TooltipTrigger>
              <TbTable className={sideBarButton} />
            </TooltipTrigger>
            <TooltipContent side="left" className="mr-3">
              טבלה חדשה
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <VscGraph className={sideBarButton} />
            </TooltipTrigger>
            <TooltipContent side="left" className="mr-3">
              גרף חדש
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <FaRegNoteSticky className={sideBarButton} />
            </TooltipTrigger>
            <TooltipContent side="left" className="mr-3">
              פתק חדש
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex justify-end h-full">
        <GridLayout
          layout={layout}
          rowHeight={350}
          width={1850}
          style={{ direction: "ltr" }}
          isDraggable={!layoutLocked}
          draggableHandle=".drag-handle">
          {layout.map((component) => (
            <Card key={component.i}>
              <DragHandle className="drag-handle">פתק חשוב</DragHandle>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </GridLayout>
      </div>
    </>
  );
};

