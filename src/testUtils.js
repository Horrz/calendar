function randomText() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function generateRandomTournament(number, array = []) {
  if (number === 0) {
    return array;
  }
  return generateRandomTournament(number - 1, array.concat([{
    lat: Math.random() * 10 + 45,
    lng: Math.random() * 10 + 6,
    name: randomText(),
    place: randomText(),
  }]));
}

function generateDemoData() {
  return [{
    lat: 50.92,
    lng: 11.57,
    date: new Date(2018, 10, 20),
    name: 'Super tolles Go Turnier',
    place: 'Jena',
  }].concat(generateRandomTournament(9));
}

export { generateDemoData as default };
