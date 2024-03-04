const fs = require("fs");

// Function to generate TypeScript code

const generateTsCode = () => {
  let code = `class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log`;
  
  for (let i = 1; i <= 100000; i++) {
    code += `const variable${i}: string = 'Value ${i}';\n`;
  }

  return code;
};

// Write the generated code to a file
const fileName = "generatedCode.ts";
const generatedCode = generateTsCode();

fs.writeFile(fileName, generatedCode, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log(`Successfully generated ${fileName}`);
  }
});
