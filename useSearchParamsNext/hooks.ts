// hooks này add query lên url hoặc có thể dùng util function như bên dưới

import {
    usePathname,
    useRouter,
    useSearchParams as useNextSearchParams,
  } from 'next/navigation'
  import { useCallback } from 'react'
  
  interface Params {
    [key: string]: string
  }
  
  export function useSearchParams() {
    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useNextSearchParams()
  
    const setSearchParams = useCallback(
      (params: Params) => {
        const _searchParams = new URLSearchParams(searchParams)
        Object.entries(params).forEach(([key, value]) => {
          if (typeof key === 'string' && typeof value === 'string') {
            if (value) {
              _searchParams.set(key, value)
            } else {
              _searchParams.delete(key)
            }
          }
        })
        const newPath = `${pathname}?${_searchParams.toString()}`
        replace(newPath)
      },
      [pathname, replace, searchParams],
    )
  
    return [searchParams, setSearchParams] as const
  }
  

  //using
//   import { useSearchParams } from '@/libs/utils/custom-hooks'
// import type { PaginationProps } from 'antd'
// import { Pagination as AntdPagination } from 'antd'

// export interface CustomPaginationProps extends PaginationProps {
//   total: number
//   currentPage?: number
// }

// export function Pagination(props: CustomPaginationProps) {
//   const [searchParams, setSearchParams] = useSearchParams()   //here
//   const page = Number(searchParams.get('page')) || 1

//   return (
//     <div className='mb-5 mt-10 flex justify-center'>
//       <AntdPagination
//         showSizeChanger={false}
//         total={props.total}
//         current={props.currentPage || page}
//         onChange={(page) => setSearchParams({ page: page.toString() })}  //here
//       />
//     </div>
//   )
// }