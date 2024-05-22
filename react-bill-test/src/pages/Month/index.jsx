import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavBar, DatePicker } from 'antd-mobile'
import classNames from 'classnames'
import dayjs from 'dayjs'
import _ from 'lodash'
import './index.scss'
import DailyBill from './components/DayBill'

const Month = () => {
  const [dateVisible, setDateVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(dayjs(new Date()).format('YYYY-MM'))
  const [currentMonthList, setMonthList] = useState([])
  const billList = useSelector((state) => state.bill.billList)

  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD')) || []
    const keys = Object.keys(groupData) || []
    return { groupData, keys }
  }, [currentMonthList])

  useEffect(() => {
    const newDate = dayjs(new Date()).format('YYYY-MM')
    setMonthList(monthGroup[newDate] || [])
  }, [monthGroup])

  const monthResult = useMemo(() => {
    const pay = currentMonthList.filter((item) => item.type === 'pay').reduce((pre, cur) => pre + cur.money, 0)
    const income = currentMonthList.filter((item) => item.type === 'income').reduce((pre, cur) => pre + cur.money, 0)
    return { pay, income, total: pay + income }
  }, [currentMonthList])

  const handleConfirm = (date) => {
    const formatDate = dayjs(date).format('YYYY-MM')
    setCurrentDate(formatDate)
    setMonthList(monthGroup[formatDate] || [])
    setDateVisible(false)
  }

  return (
    <div className='monthlyBill'>
      <NavBar className='nav' backArrow={false}>
        月度收支
      </NavBar>
      <div className='content'>
        <div className='header'>
          {/* 时间切换区域 */}
          <div className='date' onClick={() => setDateVisible(true)}>
            <span className='text'>{currentDate + ''}月账单</span>
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className='item'>
              <span className='money'>{monthResult.pay.toFixed(2)}</span>
              <span className='type'>支出</span>
            </div>
            <div className='item'>
              <span className='money'>{monthResult.income.toFixed(2)}</span>
              <span className='type'>收入</span>
            </div>
            <div className='item'>
              <span className='money'>{monthResult.total.toFixed(2)}</span>
              <span className='type'>结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className='kaDate'
            title='记账日期'
            precision='month'
            visible={dateVisible}
            max={new Date()}
            onCancel={() => setDateVisible(false)}
            onConfirm={handleConfirm}
          />
        </div>
        {/* 单日列表统计 */}
        {dayGroup.keys.map((key) => (
          <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
        ))}
      </div>
    </div>
  )
}

export default Month
