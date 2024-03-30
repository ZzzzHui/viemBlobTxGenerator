import { defineChain } from 'viem'
 
export const localChain = defineChain({
  id: 32382,
  name: 'LocalChain',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545'],
      webSocket: ['ws://localhost:8546'],
    },
  },
//   blockExplorers: {
//     default: { name: 'Explorer', url: 'https://explorer.zora.energy' },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xcA11bde05977b3631167028862bE2a173976CA11',
//       blockCreated: 5882,
//     },
//   },
})
