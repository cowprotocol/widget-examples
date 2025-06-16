import './App.css'
import { WagmiProvider } from 'wagmi'
import { persister, queryClient, wagmiConfig } from './config'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { Profile } from './Profile.tsx'
import { WalletOptions } from './WalletOptions'
import { Widget } from './Widget.tsx'

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister }}
        >
            <WalletOptions />
            <br/>
            <br/>
            <Profile />
            <br/>
            <Widget />
        </PersistQueryClientProvider>
    </WagmiProvider>
  )
}

export default App
