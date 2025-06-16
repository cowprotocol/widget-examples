import './App.css'
import { WagmiProvider } from 'wagmi'
import { persister, queryClient, wagmiCconfig } from './config'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { Profile } from './Profile.tsx'
import { WalletOptions } from './WalletOptions'

function App() {
  return (
    <WagmiProvider config={wagmiCconfig}>
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister }}
        >
            <WalletOptions />
            <br/>
            <br/>
            <Profile />
        </PersistQueryClientProvider>
    </WagmiProvider>
  )
}

export default App
