import { QueryClient } from '@tanstack/react-query'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { mainnet, sepolia } from 'wagmi/chains'
import { http, createConfig, deserialize, serialize } from 'wagmi'
import { injected, walletConnect } from 'wagmi/connectors'


export const wagmiConfig = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
    connectors: [
        injected(),
        walletConnect({ projectId: '7bd490257c3457cc6a5ebcc02066c21a' }),
    ],
})

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1_000 * 60 * 60 * 24, // 24 hours
        },
    },
})

export const persister = createSyncStoragePersister({
    serialize,
    storage: window.localStorage,
    deserialize,
})