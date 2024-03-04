
const fs = require('fs');

// Function to generate a random TypeScript variable declaration

const generateRandomVariableDeclaration = () => {
  const types = ['number', 'string', 'boolean'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomName = `var${Math.floor(Math.random() * 1000)}`;
  const randomName2 = `var${Math.floor(Math.random() * 1000)}`;
  const randomName3= `var${Math.floor(Math.random() * 1000)}`;
  return `const ${randomName}: ${randomType} = ${randomType === 'string' ? `"${randomName}"` : Math.floor(Math.random() * 100)};\n`;
};

// Generate 100 lines of TypeScript code
let tsCode = '';
for (let i = 0; i < 10000; i++) {
  tsCode += generateRandomVariableDeclaration();
}

// Write the TypeScript code to a file
fs.writeFile('generated.ts', tsCode, (err) => {
  if (err) throw err;
  console.log('TS code generated and saved to generated.ts');
});