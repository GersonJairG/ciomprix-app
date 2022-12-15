import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { store } from 'store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ReactNode } from 'react'

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
  const Auth = Component.Auth || Noop
  const persistor = persistStore(store)

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Provider>
    </PersistGate>
  )
}
