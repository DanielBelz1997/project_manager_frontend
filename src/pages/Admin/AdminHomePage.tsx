import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import TocIcon from "@mui/icons-material/Toc";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icons } from "@/components/icons";

export const AdminHomePage = () => {
  const containers = ["A", "B", "C", "D"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <div className="border rounded-lg">
      <Draggable id="draggable">
        <Table className="w-[20%]">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Draggable>
    </div>
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setParent(over ? over.id : null);
  };

  return (
    <>
      <div className="absolute z-10 flex bg-zinc-900 flex-col justify-start h-[86%] w-[2%] border-l">
        <TocIcon className="mb-5 mt-5 " />
        <Icons.paypal className="mb-5" />
        <Icons.logo className="mb-5" />
        <Icons.pnpm className="mb-5" />
      </div>
      <div className=" h-full z-0 grid grid-cols-5">
        <DndContext onDragEnd={handleDragEnd}>
          {parent === null ? draggableMarkup : null}
          {containers.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? (
                draggableMarkup
              ) : (
                <div className="w-[70%] h-[30%] border border-dashed ">dd</div>
              )}
            </Droppable>
          ))}
        </DndContext>
      </div>
    </>
  );
};

