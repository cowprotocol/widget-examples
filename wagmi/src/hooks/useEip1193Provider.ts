import { useEffect, useState } from 'react'
import { useConfig } from 'wagmi'
import type { EthereumProvider } from '@cowprotocol/widget-lib'

export function useEip1193Provider() {
    const config = useConfig()
    const [provider, setProvider] = useState<EthereumProvider | undefined>(undefined)

    useEffect(() => {
        return config.subscribe((state) => state, (state) => {
            if (state.status !== 'connected' || !state.current) return

            const connection = state.connections.get(state.current)

            if (!connection) return

            connection.connector.getProvider().then((provider) => {
                setProvider(provider as EthereumProvider)
            })
        })
    }, [config])

    return provider
}
