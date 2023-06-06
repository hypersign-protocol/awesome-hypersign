const fs = require('fs');
const path = require('path');

// set directories and paths
const methodsDir = path.join(__dirname, './hacks');
const indexFile = path.join(methodsDir, 'index.json');

// Process all method files and generate an index file
(async () => {

  const allMethods = [];
  process.stdout.write('Processing:');
  fs.readdirSync(methodsDir).forEach(filename => {
    // skip index file
    if(filename === 'index.json' || !filename.endsWith('.json')) {
      return;
    }

    const methodFile = path.join(methodsDir, filename);
    const methodData = fs.readFileSync(methodFile, 'utf-8');
    process.stdout.write(' ' + filename);

    try {
      const methodJson = JSON.parse(methodData);
      allMethods.push(methodJson);
    } catch(e) {
        console.error('\n\n❌ ERROR: Failed to parse', filename, e);
        process.exit(1);
    }
  });

  if(allMethods.length > 0) {
    fs.writeFileSync(indexFile, JSON.stringify(allMethods, null, 2), 'utf-8');    
    console.log('\n\nGenerated /did-hacks/index.json.');
  } else {
    console.error('\n\n❌ ERROR: No hacks found in did-hacks directory');
    process.exit(1);
  }

})();
