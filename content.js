const QWERTY_BINDINGS = {
  a: "ש",
  b: "נ",
  c: "ב",
  d: "ג",
  e: "ק",
  f: "כ",
  g: "ע",
  h: "י",
  i: "ן",
  j: "ח",
  k: "ל",
  l: "ך",
  m: "צ",
  n: "מ",
  o: "ם",
  p: "פ",
  q: "/",
  r: "ר",
  s: "ד",
  t: "א",
  u: "ו",
  v: "ה",
  w: "'",
  x: "ס",
  y: "ט",
  z: "ז",
  ";": "ף",
  ",": "ת",
  ".": "ץ",
  ש: "a",
  נ: "b",
  ב: "c",
  ג: "d",
  ק: "e",
  כ: "f",
  ע: "g",
  י: "h",
  ן: "i",
  ח: "j",
  ל: "k",
  ך: "l",
  צ: "m",
  מ: "n",
  ם: "o",
  פ: "p",
  "/": "q",
  ר: "r",
  ד: "s",
  א: "t",
  ו: "u",
  ה: "v",
  "'": "w",
  ס: "x",
  ט: "y",
  ז: "z",
  ף: ";",
  ת: ",",
  ץ: ".",
};

chrome.runtime.onMessage.addListener(onReceivedMessage);

function onReceivedMessage(message, sender, sendResponse) {
  const { hibrishText } = message;
  navigator.clipboard.writeText(convertCharacters(hibrishText)).then(() => alert("Fixed Hibrish!"));
}

function convertCharacters(str) {
  let convertedStr = "";
  for (let c of str) {
    let convertedChar = QWERTY_BINDINGS[c];
    convertedStr += convertedChar ? convertedChar : c;
  }
  return convertedStr;
}
