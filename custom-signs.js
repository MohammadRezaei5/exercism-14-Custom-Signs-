function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

// console.log(buildSign("Birthday", "Rob"));

///---///

function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age >= 50 ? "mature" : "young"
  } fellow you are.`;
}

// console.log(buildBirthdaySign(45));

///---///

function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

// console.log(graduationFor("Hannah", 2022));

///---///

function costOf(sign, currency) {
  const price = 20 + sign.length * 2;
  return `Your sign costs ${price.toFixed(2)} ${currency}.`;
}

// console.log(costOf("Happy Birthday Rob!", "dollars"));
