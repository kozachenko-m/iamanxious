import { file } from "bun";
import { parse } from "csv-parse/sync";

const csvContent = await file("./worries.csv").text();

const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  relax_column_count: true,
});

const jsonlLines = records.map((record: unknown) => {
  const recordObject = record as { worry_text: string; "xata.createdAt": string; "xata.updatedAt": string };
  return JSON.stringify({
    worry_text: recordObject.worry_text,
    createdAt: new Date(recordObject["xata.createdAt"]).getTime(),
    updatedAt: new Date(recordObject["xata.updatedAt"]).getTime(),
  });
});

await Bun.write("./worries.jsonl", jsonlLines.join("\n") + "\n");

console.log(`Converted ${records.length} worries to worries.jsonl`);
