let generateDomainName = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = ["com", "io", "net", "uy"];

  function randomNumberTwoIndex() {
    return Math.round(Math.random());
  }
  function randomNumberMoreIndex(num) {
    return Math.floor(Math.random() * num);
  }

  return (
    pronoun[randomNumberTwoIndex()] +
    adj[randomNumberTwoIndex()] +
    noun[randomNumberTwoIndex()] +
    domain[randomNumberMoreIndex(domain.length)]
  );
};

console.log(generateDomainName());
