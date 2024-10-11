import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";

import GanxoTapes from "./GanxoTapes";
import useUser from "./userUser";

import ganxotapesData from "./api";

export default function App() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full grid gap-8 justify-center justify-items-center mb-8">
        {/* <h1>Ganxotapes Tardor 2023</h1> */}
        <h1>Ganxotapes {ganxotapesData.season}</h1>
        <img
          // src="/ganxotapes-tardor-23.png"
          src={ganxotapesData.cover}
          alt="Ganxotapes hero image"
          className="w-[300px] h-[300px] md:h-[600px] md:w-[600px]"
        />
        <button
          onClick={() => setShowMoreInfo(!showMoreInfo)}
          className="w-full"
        >
          {showMoreInfo
            ? "Amaga informació addicional"
            : "Mostra més informació"}
        </button>
        {showMoreInfo && (
          <div>
            <p className="whitespace-pre-line">{ganxotapesData.description}</p>
            <h2>Premis</h2>
            <p className="whitespace-pre-line">{ganxotapesData.awards}</p>
          </div>
        )}
      </div>
      <GanxoTapes />
    </main>
  );
}