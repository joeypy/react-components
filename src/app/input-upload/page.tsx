import { Dropzone } from "@/components/global";

type Props = {};

export default function InputUploadPage({}: Props) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title text-3xl font-bold">Input Upload Files</h1>
        <Dropzone className="p-16 mt-10 border border-neutral-200" />
      </div>
    </section>
  );
}
