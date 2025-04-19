"use client";

import { useSearchParams } from "next/navigation";
import DriveContent from "../components/DriveContent";
import { Section } from "../components/ui";
import { Suspense } from "react";

function DrivePageContent() {
  const searchParams = useSearchParams();
  const folderId = searchParams.get("folderId");
  const heading = searchParams.get("heading");

  return (
    <Section background="white" size="large">
      <DriveContent
        title={heading || "Drive Content"}
        defaultFolderId={folderId || "1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2"}
      />
    </Section>
  );
}

export default function DrivePage() {
  return (
    <main>
      <Suspense
        fallback={
          <Section background="white" size="large">
            Loading...
          </Section>
        }
      >
        <DrivePageContent />
      </Suspense>
    </main>
  );
}
