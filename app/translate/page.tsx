"use client";

import { useState } from "react";

const languages = [
  { code: "vi", name: "Tiếng Việt" },
  { code: "en", name: "English" },
  { code: "zh", name: "中文 (Trung)" },
  { code: "ja", name: "日本語 (Nhật)" },
  { code: "ko", name: "한국어 (Hàn)" },
  { code: "fr", name: "Français (Pháp)" },
  { code: "de", name: "Deutsch (Đức)" },
  { code: "es", name: "Español (Tây Ban Nha)" },
];

export default function Translator() {
  const [sourceLang, setSourceLang] = useState("vi");
  const [targetLang, setTargetLang] = useState("en");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  // Swap ngôn ngữ
  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setTranslatedText("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          source: sourceLang,
          target: targetLang,
        }),
      });

      const data = await res.json();
      setTranslatedText(data.translatedText || "Không dịch được");
    } catch (error) {
      setTranslatedText("Lỗi kết nối. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🌐 Dịch Thuật Miễn Phí
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cột Input */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhập văn bản cần dịch..."
            className="w-full h-64 p-5 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 resize-none text-lg"
          />
        </div>

        {/* Nút Swap */}
        <div className="flex md:hidden justify-center my-2">
          <button
            onClick={swapLanguages}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            ⇄
          </button>
        </div>

        {/* Cột Output */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={swapLanguages}
              className="hidden md:block bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition"
            >
              ⇄ Đổi
            </button>
          </div>

          <div className="w-full h-64 p-5 border border-gray-300 rounded-xl bg-gray-50 text-lg overflow-auto">
            {loading ? (
              <p className="text-blue-600 animate-pulse">Đang dịch...</p>
            ) : translatedText ? (
              translatedText
            ) : (
              <p className="text-gray-400">Kết quả dịch sẽ xuất hiện ở đây</p>
            )}
          </div>
        </div>
      </div>

      {/* Nút Dịch */}
      <div className="text-center mt-8">
        <button
          onClick={handleTranslate}
          disabled={loading || !inputText.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold text-lg px-12 py-4 rounded-xl transition shadow-lg"
        >
          {loading ? "Đang dịch..." : "🌍 Dịch Ngay"}
        </button>
      </div>
    </div>
  );
}
