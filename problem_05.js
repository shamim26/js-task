function randomPassword() {
  let password = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
  for (let i = 1; i <= 10; i++) {
    const random = Math.floor(Math.random() * str.length);
    password += str.charAt(random);
  }
  return password;
}

// console.log(randomPassword());
