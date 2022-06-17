import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState)

  function validateTheme() {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return setState(JSON.parse(storageValue))
    } else {
      return setState(initialState)
    }
  }

  function handleChangeThemeContext() {
    localStorage.setItem(key, JSON.stringify(state))
  }

  useEffect(() => validateTheme(), [])
  useEffect(() => handleChangeThemeContext(), [key, state])

  return [state, setState]
}

export default usePersistedState
