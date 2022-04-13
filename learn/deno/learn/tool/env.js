const args = Deno.args;
if(args=="py_env"){
      const execAuth = Deno.run({
                        cmd: ["source", "/opt/anaconda/bin/activate", "google"],
                        });
    console.log("py");
}
// console.log(args);