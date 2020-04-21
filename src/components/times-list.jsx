import React,{useState ,useEffect } from 'react'
import firebase from '../firebase'

const SORT_OPTIONS ={
    'TIME_ASC' :{column :'time_seconds',direction :'asc'},
    'TIME_DESC' :{column :'time_seconds',direction :'desc'},
    'TITLE_ASC': {column :'Title',direction:'asc'},
    'TITLE_DESC' :{column :'time_seconds',direction :'desc'},

}
function useTimes(sortBy='TIME_ASC'){
    const[times,setTimes]=useState([])

    useEffect(()=>{
        const unsubscribe =firebase 
// firebase
.firestore()
.collection('times')
.orderBy(SORT_OPTIONS[sortBy].column,SORT_OPTIONS[sortBy].direction)
.onSnapshot((snapshot)=>{
    const newTimes = snapshot.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
    }) )
    setTimes(newTimes)
    })
    return () => unsubscribe()
    },[sortBy])

    return times
}

const TimeList =()=>{
const [sortBy, setSortBy] = useState('TIME_ASC')
const times = useTimes(sortBy)
return (
    <div>
        <h2>Times List</h2>
        <div>
            <label>Sort By :</label>
            <select value={sortBy} onChange={e=> setSortBy(e.currentTarget.value)}>
                <option value="TIME_ASC">time (fastest first)</option>
                <option value="TIME_DESC"> time (slowest first)</option>
                <option  disabled>----</option>
                <option value="TITLE_ASC">Title (a-z)</option>
                <option value="TITLE_DESC">Title (z-a)</option>              
            </select>
        </div>
  <ol>
      {times.map((time)=>
      <li key={time.id}>
          <div className="time-entry">
            {time.title}     
           <code className="Line">{time.time_seconds} sec</code>
          </div>
      </li>
      )}
  </ol>


    </div>
)
}

export default TimeList