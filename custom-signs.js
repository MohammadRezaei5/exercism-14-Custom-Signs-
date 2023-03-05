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
