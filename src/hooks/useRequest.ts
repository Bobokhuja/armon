import { useState, useEffect } from 'react'
import { serverApi } from '../utils/server'

function useRequest(url: string) {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        let response = await fetch(`${serverApi}${url}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        let data = await response.json()
        setData(data)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return [data, isLoading, error]
}

export default useRequest