import { Payment, columns } from "./Columns";
import { DataTable } from "./DataTable";
import { useEffect, useState } from "react";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    }
    // ...
  ];
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);
  useEffect(() => {
    getData().then(setData);
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
