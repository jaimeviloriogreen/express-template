import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function dynamicContent(file){
    return path.join(__dirname, "../../src/views", file);
}