import { useAccount } from 'wagmi'
import { disconnect } from 'wagmi/actions'
import { wagmiConfig } from "./config.ts";

export function Profile() {
    const { address } = useAccount()

    const onDisconnect = async () => {
        await disconnect(wagmiConfig)
    }

    return (
        <div>
            <div>Address: {address}</div>
            {address && <button onClick={onDisconnect}>Disconnect</button>}
        </div>
    )
}