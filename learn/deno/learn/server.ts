import {Application , Router} from 'http://deno.land/x/oak/mod.ts';

//set port
const port = 8000;

// init app
const app = new Application();
const router = new Router();

//use app
app.use(router.routes());
app.use(router.allowedMethods());

//send data
router.get("api/v1/products", ({ response }: { response:any}) => {
  response.body = 'Hello world';
});

//log running
console.log(`server running on port ${port}`);

// run server
await app.listen({port});
