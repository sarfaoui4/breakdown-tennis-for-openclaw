"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#FF5722]">Upload vidéo</h1>
      <p className="text-center text-[#A0A0A0] mb-10 max-w-xl mx-auto">
        Envoyez votre vidéo (max 15 minutes) pour analyse. Formats acceptés : MP4, MOV, AVI. Taille max : 2 Go. Résolution minimale : 720p.
      </p>
      <div className="max-w-xl mx-auto p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
        <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-4 block mx-auto" />
        {file && <p className="mb-4 text-[#FF5722] text-center">Fichier sélectionné : {file.name}</p>}
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
            Envoyer et payer
          </button>
        </div>
      </div>
    </div>
  );
}