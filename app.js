let pronoun = ["the", "our", "last"];
let adj = ["great", "big", "of"];
let noun = ["jogger", "racoon", "us"];
let domain = ["com", "io", "net", "uy", "us"];

let generateDomainName = () => {
  for (const p of pronoun) {
    for (const a of adj) {
      for (const n of noun) {
        for (const d of domain) {
          if (n.endsWith(d)) {
            console.log(`${p}${a}${n.slice(0, n.length - d.length)}.${d}`);
          } else {
            console.log(`${p}${a}${n}.${d}`);
          }
        }
      }
    }
  }
};
generateDomainName();
