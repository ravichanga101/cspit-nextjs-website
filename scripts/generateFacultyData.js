import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import slugify from "slugify";

// Read workbook
const workbook = xlsx.readFile(
  path.join(process.cwd(), "public", "faculty_data (4).xlsx")
);
const sheetName = workbook.SheetNames[0];
const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Map rows to faculty objects with slug
const faculties = rows.map((f) => {
  const rawImage = f["ImagePath"] || "";
  const image = rawImage.startsWith("/") ? rawImage : `/${rawImage}`;
  return {
    ...f,
    image,
    slug: slugify(f["Name"] || "", { lower: true }),
  };
});

// Write JSON file
const outputPath = path.join(process.cwd(), "src", "lib", "facultyData.json");
fs.writeFileSync(outputPath, JSON.stringify(faculties, null, 2));
console.log(`Generated facultyData.json with ${faculties.length} records.`);
