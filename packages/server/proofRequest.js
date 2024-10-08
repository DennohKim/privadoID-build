// const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");

// // design your own customised authentication requirement here using Query Language
// // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

// const humanReadableAuthReason = "Must be born before this year";

// const credentialSubject = {
//   birthday: {
//     // users must be born before this year
//     // birthday is less than Jan 1, 2023
//     $lt: 20230101,
//   },
// };

// const proofRequest = KYCAgeCredential(credentialSubject);

// module.exports = {
//   humanReadableAuthReason,
//   proofRequest,
// };

const { ProofOfHumanity } = require("./vcHelpers/ProofOfHumanity");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be verified as human";

const credentialSubject = {
  isHuman: {
    $eq: true,
  },
};

const proofRequest = ProofOfHumanity(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};