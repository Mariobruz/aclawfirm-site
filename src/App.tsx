import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { LanguageProvider } from "@/context/LanguageContext";
import Home from "@/pages/Home";
import ContentPage from "@/pages/ContentPage";
import type { PageBody } from "@/lib/site";

export default function App({ body }: { body: PageBody | null }) {
  return (
    <LanguageProvider body={body}>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en/" element={<Home />} />
          <Route path="/es/" element={<Home />} />
          <Route path="*" element={<ContentPage />} />
        </Routes>
      </MotionConfig>
    </LanguageProvider>
  );
}
