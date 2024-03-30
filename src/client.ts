import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { localChain } from './localChain'
 
export const account = privateKeyToAccount('0x2e0834786285daccd064ca17f1654f67b4aef298acbb82cef9ec422fb4975622')
 
export const client = createWalletClient({
  account,
  chain: localChain,
  transport: http()
})
