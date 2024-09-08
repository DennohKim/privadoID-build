module.exports = {
    // VC type: KYCAgeCredential
    // https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.jsonld
    ProofOfHumanity: () => ({
        "circuitId": "credentialAtomicQuerySigV2",
        "id": 1725715676,
        "query": {
          "allowedIssuers": [
            "*"
          ],
          "context": "ipfs://QmRP9SZdxp72GoBQxywqGFYMrsCNxvBAEfs9rwCsmBvdG8",
          "type": "POH",
          "credentialSubject": {
            "isHuman": {
              "$eq": true
            }
          },
        }
      }
),
    // See more off-chain examples
    // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1

  };
  