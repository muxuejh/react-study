import { Button } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getBillList } from '@/store/modules/bill'

export default function Layout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList())
  }, [])

  return (
    <div>
      <Outlet />
      <Button color='primary'>aa</Button>
    </div>
  )
}
