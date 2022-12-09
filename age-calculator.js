function ageCalculator (name, yearOfBirth, currentYear) {
  const profileDetails = [name, yearOfBirth, currentYear];
  const age = profileDetails[2] - profileDetails[1];
  const firstName = profileDetails[0]

  return firstName + " is " + age + " years old."

}

console.log(ageCalculator("Suzie", 1983, 2015));