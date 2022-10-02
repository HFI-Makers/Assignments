'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readline() {
  return inputString[currentLine++];
}



function main() {
  var T = parseInt(readline());

  for (var num = 1; num <= T; num+=1) {
    process.stdout.write('Case#' + num + ': ');
    solve();
  }
}

function solve() {
  var N, M;
  [N, M] = readline().split(' ').map(x => parseInt(x));

  var C = [];
  C = readline().split(' ').map(x => parseInt(x));


  var sum = 0;
  for (var i = 0; i < N; i+=1) {
    sum += C[i];
  }

  var output = sum % M;

  process.stdout.write(output + '\n');
}
