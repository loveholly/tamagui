import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
// causes metro bundle issue it seems:
// import * as Linking from 'expo-linking'
import React, { useContext, useMemo } from 'react'
import { Linking, Platform } from 'react-native'

import { ThemeContext } from '../../useKitchenSinkTheme'

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V4'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = React.useState(false)
  const [initialState, setInitialState] = React.useState()
  const storage = useAsyncStorage(PERSISTENCE_KEY)
  const themeContext = useContext(ThemeContext)

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await storage.getItem()
          const state = savedStateString ? JSON.parse(savedStateString) : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  const linking = useMemo(
    () => ({
      // Linking.createURL('/')
      prefixes: [],
      config: {
        initialRouteName: 'home',
        screens: {
          home: '',
          demo: 'demo/:id',
          tests: 'tests',
          test: 'test/:id',
          sandbox: 'sandbox',
        },
      } as const,
    }),
    []
  )

  if (!isReady) {
    return null
  }

  const theme = themeContext.value === 'dark' ? DarkTheme : DefaultTheme

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) => {
        storage.setItem(JSON.stringify(state))
      }}
      linking={linking}
      theme={theme}
    >
      {children}
    </NavigationContainer>
  )
}
