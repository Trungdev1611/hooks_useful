import { useEffect, useState } from "react"
import axios from 'axios'
function useFetchData(url:string) {
  const [dataFetched, setDataFetched] = useState([])
  const [loading, setLoading] = useState(false)
    useEffect(() => {
      async function fetchData () {
        setLoading(true)
        const res =await axios.get(url)

        try {
          if(res.data) {
            setDataFetched(res.data)
            setLoading(false)

        }
        } catch (error) {
          setLoading(false)
        }
   
      }
      fetchData()

    }, [url])
    return [loading, dataFetched]
}

export default useFetchData