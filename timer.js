let args = process.argv;
let slicedArgs = args.slice(2);
for (let arg of slicedArgs) {
  arg = Number(arg);
  if (arg > -1 && !isNaN(arg) ) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(`Beeped after ${arg} seconds`);
    }, arg * 1000);
  }
}


