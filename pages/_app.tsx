import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { store } from 'store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </PersistGate>
  )
}
