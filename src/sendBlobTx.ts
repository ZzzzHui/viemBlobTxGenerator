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
    // Cartesi InputBox contract address
    to: '0x7dD40aD1bbd7846d0c9811d7Db1Cf39CF6D4f9d7',
    // example abi data for function call to `addInput(address,bytes)`
    data: '0x1789cd6300000000000000000000000019684c3f73246ea40d610923c0936b517bb1f24a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000031122330000000000000000000000000000000000000000000000000000000000'
  })
  console.log(hash)
}

send()
