import React, { useEffect, useState } from 'react';
import "./MainTable.css";
import axios from "axios";
import DataTable from 'react-data-table-component';


const columns = [
  {
    name: 'Id',
    selector: row => row.ID,
    width: "100px" 
  },
  {
    name: 'Name',
    selector: row => row.Name,
    width: "100px" 
  },
  {
    name: 'Company',
    selector: row => row.Company,
    width: "200px" 
  },
  {
    name: 'Reviews',
    selector: row => row.Reviews,
    // width: "2000px"
  },
  {
    name: 'Email',
    selector: row => row.email,
    width: "300px"
  },
  {
    name: 'Rating',
    selector: row => row.rating,
    width: "100px" 
  },
  {
    name: 'Language',
    selector: row => row.Language,
    width: "100px"
  },
  {
    name: 'datecreated',
    selector: row => row.datecreated,
    cell: (row) => new Date(row.datecreated).toISOString().replace("T"," ").split(".")[0],
    width: "100px"
  },
  {
    name: 'Status',
    selector: row => row.Status,
    width: "100px"
  },
  {
    name: 'Link',
    selector: row => row.link,
    // width: "00px"
  },

];


export default function MainTable() {

  const [mainData, setMainData] = useState([])
  const [number, setNumber] = useState()
  const api = "https://admin.tomedes.com/api/v1/get-reviews"


  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`${api}`)
      setMainData(data.data)
    }
    fatchData()
  }, [])

  const handelClick = async () => {
    const { data } = await axios.get(`${api}?page=${number}`)
    setMainData(data.data)
  }

  return (
    <>
      <div className='table'>
        <div className="table_container">
          <div className="table_main">
            <div className='input'>
              <input placeholder='Send Number' className='inp' onChange={(e) => setNumber(e.target.value)} />
              <button className='btn table_btn' onClick={handelClick}>Send</button>
            </div>
            <div className='table_data'>
              <DataTable
                columns={columns}
                data={mainData}
                pagination
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
