"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <button 
      onClick={()=>router.push("/landingone")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        First landing page
      </button>

            <button 
      onClick={()=>router.push("/landingtwo")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Second landing page
      </button>

    </div>
  );
}
