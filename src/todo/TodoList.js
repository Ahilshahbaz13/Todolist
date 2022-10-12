import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import '../todo/todolist.css'
const getLocalItem = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else {
    return []
  }
}
export default function TodoList() {
  const [activity, setActivity] = useState()
  const [errorData, setErrorData] = useState(0);
  const [item, setItem] = useState(getLocalItem())
  function add(e) {
    e.preventDefault()
    if (!activity) {
      setErrorData(1)
    }
    else {
      setErrorData(0)
      setItem((listData) => {
        const updatedata = [...item, activity]
        setActivity("")
        return updatedata
      })
    }
  }

  function remove(i) {
    const updatelitsdata = item.filter((ele, id) => {
      return i !== id;
    })
    setItem(updatelitsdata)
  }
  const removeall = () => {
    setItem([])
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(item))

  }, [item])




  return (
    <div className='todolist'>
      <div className="header">
        <form >
          <div className="main1">
            <label htmlFor="">Todo List</label>
            <input type="text" className='search '
              onChange={(e) => setActivity(e.target.value)}
              value={activity} placeholder="Enter Item"
            />
            <AiOutlinePlusCircle onClick={add} className='add' />
          </div>
          {errorData === 1 ? <div className="errorMessage"> Please enter Item </div> : ''}

          <p>your data is :{")"} </p>
          {item && item.map((data, i) => {
            return (
              <div className='main'>
                <p key={i}>
                  <div className='data ' >{data}</div>
                  <MdDelete className='remove' onClick={() => remove(i)} />
                </p>
              </div>
            )
          })}
          {item.length >= 1 &&
            <Button variant="success"
              onClick={() => removeall()}>
              Remove all
            </Button>}

        </form>
      </div>
    </div>
  )
}
