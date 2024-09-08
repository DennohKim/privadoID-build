import PolygonIDVerifier from '@/components/PolygonIDVerifier'
import React, { useState } from 'react'

const Verify = () => {
  const [proveHumanity, setProveHumanity] = useState(false);

  return (
    <>
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-xl font-bold">Verify your credentials</h1>

      <PolygonIDVerifier
        publicServerURL={
          process.env.NEXT_PUBLIC_VERIFICATION_SERVER_PUBLIC_URL
        }
        localServerURL={
          process.env.NEXT_PUBLIC_VERIFICATION_SERVER_LOCAL_HOST_URL
        }
        credentialType={"ProofOfHumanity"}
        issuerOrHowToLink={
          "https://web-wallet-demo.privado.id/?success=false"
        }
        onVerificationResult={setProveHumanity}
      />
    </div>
  </>
  )
}

export default Verify
