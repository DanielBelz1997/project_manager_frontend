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

export const AdminHomePage = () => {
  const [layoutLocked, isLayoutLocked] = useState<boolean>(false);

  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 },
  ];

  const sideBarButton =
    "transition-transform transform size-10 m-4 cursor-pointer hover:scale-110";

  const GridItemWrapper = styled.div`
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const DragHandle = styled.div`
    cursor: move;
    background: #4a90e2;
    color: white;
    padding: 8px;
    text-align: center;
    font-weight: bold;
  `;

  const GridItemContent = styled.div`
    padding: 8px;
    flex-grow: 1;
  `;

  return (
    <>
      <div className="fixed border-l border-t border-b top-[15vh] -bottom-7 h-[70vh] rounded-tl-2xl rounded-bl-2xl ">
        <div className="border-b" onClick={() => isLayoutLocked(!layoutLocked)}>
          {layoutLocked ? (
            <Tooltip>
              <TooltipTrigger>
                <CiUnlock className={sideBarButton} />
              </TooltipTrigger>
              <TooltipContent side="left" className="mr-3">
                נעילת גליון
              </TooltipContent>
            </Tooltip>
          ) : (
            <CiLock className={sideBarButton} />
          )}
        </div>
        <div className="">
          <></>
          <TbTable className={sideBarButton} />
          <VscGraph className={sideBarButton} />
          <FaRegNoteSticky className={sideBarButton} />
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
          <GridItemWrapper key="blue-eyes-dragon">
            <DragHandle className="drag-handle">Blue Eyes Dragon</DragHandle>
            <GridItemContent>Blue Eyes Dragon</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="dark-magician">
            <DragHandle className="drag-handle">Dark Magician</DragHandle>
            <GridItemContent>Dark Magician</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="kuriboh">
            <DragHandle className="drag-handle">Kuriboh</DragHandle>
            <GridItemContent>Kuriboh</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="spell-caster">
            <DragHandle className="drag-handle">Spell Caster</DragHandle>
            <GridItemContent>Spell Caster</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="summoned-skull">
            <DragHandle className="drag-handle">Summoned Skull</DragHandle>
            <GridItemContent>Summoned Skull</GridItemContent>
          </GridItemWrapper>
        </GridLayout>
      </div>
    </>
  );
};

