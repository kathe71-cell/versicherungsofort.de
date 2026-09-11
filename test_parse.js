const fs = require('fs');
const code = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const catMatch = code.match(/const insuranceCategories = (\[[\s\S]*?\]);\n\nconst steps/s);
if (catMatch) {
    let arrayString = catMatch[1].replace(/createPageUrl\("([^"]+)"\)/g, '"$1"');
    console.log("Extracted Array String length:", arrayString.length);
    try {
        const getCats = new Function("return " + arrayString);
        let cats = getCats();
        console.log("Successfully parsed! First category:", cats[0].title);
    } catch(e) {
        console.error("Parse Error:", e.message);
        console.log("BEGIN------------\n", arrayString.substring(0, 500));
        console.log("END------------\n", arrayString.substring(arrayString.length - 500));
    }
}
