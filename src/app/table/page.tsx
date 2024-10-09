import { DataTable } from "@/components/global";

type Props = {};

export default function InputUploadPage({}: Props) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title text-3xl font-bold">Table</h1>
        <DataTable />
      </div>
    </section>
  );
}
