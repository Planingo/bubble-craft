const generate = require("../src/generate.json")
const fs = require("fs");
const {default: generateProptypes} = require("typescript-proptypes-generator")

if (process.argv[5] === 'styles') {
    generate.styles.push({
        id: process.argv[2].toLowerCase(),
        title: process.argv[3] || process.argv[2],
        descrition: process.argv[4] || `TODO la description de ${process.argv[3].toLowerCase() || process.argv[2].toLowerCase()}`,
        wip: true
    })

    generate.styles.sort(function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      })
} else if (process.argv[5] === 'atomes') {
    generate.atomes.push({
        id: process.argv[2].toLowerCase(),
        title: process.argv[3] || process.argv[2],
        descrition: process.argv[4] || `TODO la description de ${process.argv[3].toLowerCase() || process.argv[2].toLowerCase()}`,
        wip: true
    })

    generate.atomes.sort(function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      })
} else if (process.argv[5] === 'molecules') {
    generate.molecules.push({
        id: process.argv[2].toLowerCase(),
        title: process.argv[3] || process.argv[2],
        descrition: process.argv[4] || `TODO la description de ${process.argv[3].toLowerCase() || process.argv[2].toLowerCase()}`,
        wip: true
    })

    generate.molecules.sort(function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      })
} else if (process.argv[5] === 'organisms') {
    generate.composants.push({
        id: process.argv[2].toLowerCase(),
        title: process.argv[3] || process.argv[2],
        descrition: process.argv[4] || `TODO la description de ${process.argv[3].toLowerCase() || process.argv[2].toLowerCase()}`,
        wip: true
    })

    generate.composants.sort(function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      })
} else if (process.argv[5] === 'templates') {
    generate.layouts.push({
        id: process.argv[2].toLowerCase(),
        title: process.argv[3] || process.argv[2],
        descrition: process.argv[4] || `TODO la description de ${process.argv[3].toLowerCase() || process.argv[2].toLowerCase()}`,
        wip: true
    })

    generate.layouts.sort(function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      })
} else {
  console.log("Y a un problème 🙈")
}

fs.writeFileSync(require.resolve("../src/generate.json"), JSON.stringify(generate, null, 2))
