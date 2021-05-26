import { useState } from 'react'

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue)
  return [state, () => setState(currentValue => !currentValue)]
}

export default useToggle
