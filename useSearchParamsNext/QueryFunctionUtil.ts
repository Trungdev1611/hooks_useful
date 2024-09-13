export function QueryStringObj(
    data: Record<string, number | string | undefined | null>,
    objectAdd?: Record<string, number | string | undefined | null>,
  ): string {
    const queryString = Object.entries({ ...data, ...objectAdd })
      .filter(([key, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        const encodedValue = encodeURIComponent(String(value))
        return `${encodeURIComponent(key)}=${encodedValue}`
      })
      .join('&')
  
    return queryString || ''
  }
  
  //nối object lên url tương tự query-string


  export function QueryStringObjWithTab(
    data: Record<string, number | string | undefined | null>,
  ): string {
    const queryString = Object.entries(data)
      .filter(([key, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        const encodedValue = encodeURIComponent(String(value))
        return `${encodeURIComponent(key)}=${encodedValue}`
      })
      .join('&')
  
    return queryString || ''
  }
  