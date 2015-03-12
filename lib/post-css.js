#!/usr/bin/env node

var fs = require('fs');

var postcss = require('postcss');
var argv = require('minimist')(process.argv.slice(2));

var cssIn = argv._[0];
var cssOut = argv._[1];

var css = fs.readFileSync(cssIn, 'utf8');

var processor = postcss([
  require('postcss-import')(),
  require('postcss-custom-media')(),
  require('postcss-custom-properties')(),
  require('autoprefixer')
]);

var result = processor.process(css, {
  from: cssIn,
  to: cssOut,
  map: { inline: true }
});

if (cssOut) {
  fs.writeFileSync(cssOut, result.css);
} else {
  console.log(result.css);
}
