import * as cKzg from 'c-kzg'
import { setupKzg } from 'viem'
import { mainnetTrustedSetupPath } from 'viem/node'
 
export const kzg = setupKzg(cKzg, 'node_modules/viem/trusted-setups/mainnet.json')
