## Steps to get rust env working 

- install rust [link](https://www.rust-lang.org/)
- install wasm pacj [link](https://rustwasm.github.io/wasm-pack/)
- run 
``` 
npm run pack
```
- if all goes as planned, you will find the wasm file and the js glue file into `src/wasm/hello-wasm/pkg` ready to be included as described [here](https://rustwasm.github.io/wasm-pack/book/quickstart.html) 
