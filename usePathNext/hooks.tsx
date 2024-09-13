// hooks này tạo đường dẫn tương đối lên url

import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function usePath(): [string, (path: string | number) => void] {
  const pathName = usePathname()
  const router = useRouter()

  const setPathName = useCallback(
    (path: string | number) => {
      router.push(`${pathName}/${path.toString()}`)
    },
    [pathName, router],
  )

  return [pathName, setPathName]
}


/**--------Using--------------------- 
 * export function ClaimDataListTable() {
 *   const [path, setPathRelative] = usePath()  //here
 * 
 * <Table
        rowSelection={{
          columnWidth: '100px',
          type: 'checkbox',
          ...rowSelection,
        }}
        onRow={(record) => {
          return {
            onClick: () => setPathRelative(`claim-data/${record?.id}`),   //here
          }
        }}
        dataSource={listData.map((user) => ({ ...user, key: user.id }))}
        columns={columns}
        className='[&_.ant-table-row]:cursor-pointer'
      />
 * 
 * 
 * 
 * 
 * 
 */