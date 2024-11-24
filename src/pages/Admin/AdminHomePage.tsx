import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

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

export const AdminHomePage = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <div className="border rounded-lg">
      <Draggable id="draggable">
        <Table>
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
          </TableBody>
        </Table>
      </Draggable>
    </div>
  );

  const handleDragEnd = (event) => {
    const { over } = event;

    setParent(over ? over.id : null);
  };

  return (
    <div className="w-full h-full p-40 flex justify-around items-center">
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? (
              draggableMarkup
            ) : (
              <div className="border border-dashed p-20">dd</div>
            )}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );
};

