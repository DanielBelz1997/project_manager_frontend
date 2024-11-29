import { Table } from "lucide-react";
import GridLayout from "react-grid-layout";

export const AdminHomePage = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <div className="w-full h-full p-40 flex justify-around items-center">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}>
        <div key="a">a</div>
        <div className="bg-slate-300" key="b">
          <Table />
        </div>
        <div key="c">c</div>
      </GridLayout>
    </div>
  );
};

// className="w-full h-full p-40 flex justify-around items-center"

