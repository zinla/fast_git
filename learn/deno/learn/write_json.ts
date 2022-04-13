/**
 * write.ts
 */
function writeJson(path: string, data: object): string {
    try {
        Deno.writeTextFileSync(path, JSON.stringify(data));

        return "Written to " + path;
    } catch (e) {
        return e.message;
    }
}
const data = { hello: "World", name: "Alen" };
console.log(writeJson("./data.json", data));