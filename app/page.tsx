import UploadForm from "@/components/UploadForm";
export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/4 py-4">Map is going to be here</div>
        <div className="w-full font-mono p-4 lg:w-1/4">
          <UploadForm />
        </div>
      </div>
    </main>
  );
}
