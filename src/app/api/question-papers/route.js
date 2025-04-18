import { google } from "googleapis";

// Initialize Google Drive API
const drive = google.drive({
  version: "v3",
  auth: new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  }),
});

export async function GET() {
  try {
    // Fetch files from the specific Google Drive folder
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/pdf'`,
      fields: "files(id, name, createdTime)",
      orderBy: "createdTime desc",
    });

    const files = response.data.files.map((file) => ({
      id: file.id,
      title: file.name.replace(".pdf", ""),
      // Parse department, year, and semester from filename
      // Assuming filename format: "department_year_semester_subject.pdf"
      department: file.name.split("_")[0],
      year: file.name.split("_")[1],
      semester: file.name.split("_")[2],
      driveLink: `https://drive.google.com/file/d/${file.id}/view`,
    }));

    return new Response(JSON.stringify(files), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching question papers:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch question papers" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
