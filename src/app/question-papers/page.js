"use client";

import DriveContent from "../components/DriveContent";
import { Section } from "../components/ui";

export default function QuestionPapersPage() {
  return (
    <main>
      <Section background="white" size="large">
        <DriveContent 
          title="Question Papers" 
          defaultFolderId="1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW"
        />
      </Section>
    </main>
  );
}