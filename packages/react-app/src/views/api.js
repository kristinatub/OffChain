import { createClient } from 'urql';

const API_URL = "https://api.lens.dev/playground";
export const client = createClient({
    url: API_URL
});

export const postPublication =`
mutation CreatePostTypedData {
    createPostTypedData(request: {
      profileId: "0x03",
      contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl",
      collectModule: {
        revertCollectModule: tru
      },
      referenceModule: {
        followerOnlyReferenceModule: false
      }
    }) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
        domain {
          name
          chainId
          version
          verifyingContract
        }
        value {
          nonce
          deadline
          profileId
          contentURI
          collectModule
          collectModuleInitData
          referenceModule
          referenceModuleInitData
        }
      }
    }
  }
`