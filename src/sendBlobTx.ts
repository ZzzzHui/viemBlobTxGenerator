import { parseGwei, stringToHex, toBlobs } from 'viem'
import { account, client } from './client'
import { kzg } from './kzg'
 
const blobs = toBlobs({ data: stringToHex('hello bloooooob') })
 
async function send() {
  console.log('sending...')
  const hash = await client.sendTransaction({
    blobs,
    kzg,
    maxFeePerBlobGas: parseGwei('30'),
    to: '0x19684c3F73246EA40D610923C0936b517Bb1F24a',
    data: '0xfae9bfc2000000000000000000000000b1c65720831a5c4d1000756060ead6190fb55055'
  })
  console.log(hash)
}

send()
