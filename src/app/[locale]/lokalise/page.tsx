"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

interface TranslationKey {
  key_name: { other: string };
  translations: { language_iso: string; translation: string }[];
}

const LANGUAGE_OPTIONS = [
  { label: "English", iso: "en" },
  { label: "Arabic", iso: "ar" },
  { label: "Spanish", iso: "es" },
];

export default function LokaliseTranslationTable() {
  const [language, setLanguage] = useState("en");
  const [keys, setKeys] = useState<TranslationKey[]>([]);

  useEffect(() => {
    fetchTranslations();
  }, []);

  const fetchTranslations = async () => {
    try {
      const res = await axios.get(
        `https://roam.virginconnect.com/proxy/api2/projects/99182829653904d72e6176.63945173/keys`,
        {
          params: {
            include_translations: 1,
            limit: 100,
          },
        }
      );
      setKeys(res.data?.keys || []);
    } catch (error) {
      console.error("Translation fetch failed:", error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Translations</h1>
        <select
          className="border rounded px-3 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {LANGUAGE_OPTIONS.map((lang) => (
            <option key={lang.iso} value={lang.iso}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Key</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Translation ({language})</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key) => {
            const translation = key.translations.find((t) => t.language_iso === language)?.translation;
            return (
              <tr key={key.key_name.other}>
                <td className="border border-gray-300 px-4 py-2">{key.key_name.other}</td>
                <td className="border border-gray-300 px-4 py-2">{translation || <em>Missing</em>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}
