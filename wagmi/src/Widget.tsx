import { CowSwapWidget } from '@cowprotocol/widget-react'
import type { CowSwapWidgetParams } from '@cowprotocol/widget-lib'

import { useEip1193Provider } from './hooks/useEip1193Provider.ts'

const widgetParams: CowSwapWidgetParams = {
    appCode: 'cow-widget-wagmi-example',
    standaloneMode: false
}

export function Widget() {
    const provider = useEip1193Provider()

    return <CowSwapWidget params={widgetParams} provider={provider }/>
}