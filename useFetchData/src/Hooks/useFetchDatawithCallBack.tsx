import { useEffect, useState } from "react"
import axios from 'axios'
import { IDataconver, Ifunction, Iprops } from "../App"

function useFetchDataCallback(url:string, callback: Ifunction) {
  const [dataFetched, setDataFetched] = useState<IDataconver[]>([])
  const [loading, setLoading] = useState(false)
    useEffect(() => {
      async function fetchData () {
        setLoading(true)
        const res =await axios.get(url)

        try {
          if(res.data) {
            const data = callback(res.data)
            setDataFetched(data)
            setLoading(false)

        }
        } catch (error) {
          setLoading(false)
        }
   
      }
      fetchData()

    }, [url,callback])
    return [loading, dataFetched]
}

export default useFetchDataCallback