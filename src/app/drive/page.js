"use client";

import { useSearchParams } from "next/navigation";
import DriveContent from "../components/DriveContent";
import { Section } from "../components/ui";

export default function DrivePage() {
  const searchParams = useSearchParams();
  const folderId = searchParams.get("folderId");
  const heading = searchParams.get("heading");

  return (
    <main>
      <Section background="white" size="large">
        <DriveContent
          title={heading || "Drive Content"}
          defaultFolderId={folderId || "1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2"}
        />
      </Section>
    </main>
  );
}
