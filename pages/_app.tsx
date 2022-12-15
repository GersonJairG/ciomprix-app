import 'styles/globals.css'
import type { NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { store } from 'store'

type CustomAppProps = AppProps & {
  Component: NextComponentType & { Auth?: any }
}

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>

export default function App({ Component, pageProps }: CustomAppProps) {
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
