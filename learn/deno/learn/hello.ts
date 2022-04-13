import { serve } from "https://deno.land/std@0.79.0/http/server.ts";
const s = serve({ port: 5000 });
console.log("http://localhost:5000/");
for await (const req of s) {
  req.respond({ body: "<div class='name'>Mechelle</div>" });
}
