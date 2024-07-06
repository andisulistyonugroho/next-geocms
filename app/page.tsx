import dynamic from "next/dynamic";
import MapVisual from "@/components/MapVisual";
import UploadForm from "@/components/UploadForm";

const DynamicMapVisual = dynamic(() => import("@/components/MapVisual"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});
export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/4 py-4">
          <DynamicMapVisual />
        </div>
        <div className="w-full font-mono p-4 lg:w-1/4">
          <UploadForm />
        </div>
      </div>
    </main>
  );
}
