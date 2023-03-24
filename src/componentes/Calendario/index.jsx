import { useEffect, useState } from 'react'
import './styles.css'

const isLeap = (year) => (year%4===0 && year % 100 !== 0)|| year % 400===0

const numberOfDay=(m,y=2023)=>{
    if (m===2) return isLeap(y)?29:28
    if (m<=7) return m%2!==0?31:30
    return m%2!==0?30:31
}

const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const CalendarDay = ({month,year}) =>{
    month++
    let arr=[]
    for (let index = 2; index <= numberOfDay(month,year); index++) arr.push(index)
    return arr.map(e=><li >{e}</li>);
}


const SelectMonth = ({month,setMonth}) => {
    
    // const options = [
    //   { value: "blues", label: "Blues" },
    //   { value: "rock", label: "Rock" },
    //   { value: "jazz", label: "Jazz" },
    //   { value: "orchestra", label: "Orchestra" },
    // ];

    return (
      <div className="meses">
        <div className="mt-5 m-auto w-50 text-light">
            <select
                value={month} // ...force the select's value to match the state variable...
                onChange={e => setMonth(e.target.value)}
                name='meses'
                className='select-month select'>
            {months.map((e,index)=><option value={index}>{e}</option>)}
          </select>
        </div>
      </div>
    );
  };


  const SelectYear = ({year,setYear}) => {
    
    const options = [
      { value: "blues", label: "Blues" },
      { value: "rock", label: "Rock" },
      { value: "jazz", label: "Jazz" },
      { value: "orchestra", label: "Orchestra" },
    ];

    return (
      <div className="year select">
        <div className="mt-5 m-auto w-50 text-light">
            <input 
            type="number" 
            value={year}
            onChange={e => setYear(e.target.value)}
            className='select-month select'
            min="1800" max="3000"></input>
          {/* </select> */}
        </div>
      </div>
    );
  };

  function DiasSemana() {
    const dias = ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    return (<> {
      dias.map(dia=> <li className='day-name'>{dia}</li> )
      }
    </>
    )}

export default function Calendario() {
    const [firstDay, setfirstDay] = useState(1);
    const [month,setMonth]=useState(new Date().getMonth())
    const [year,setYear]=useState(new Date().getFullYear())

    useEffect(() => {
        const firstDayCalendar = document.getElementsByClassName('first-day')
        firstDayCalendar[0].style.gridColumnStart = firstDay
        
        const ftDay = new Date(year,month,1)
        
        setfirstDay(ftDay.getUTCDay()+1)
        return () => {
            
        };
    }, [firstDay,month,year]);
    return <>
    <legend>Calendario {`${year}`}</legend>

    <div className='calendar-legend'>
        <SelectMonth month={month} setMonth={setMonth}/>
        <SelectYear year={year} setYear={setYear}/>
    </div>
    
    <ol>
        <DiasSemana/>
        <li className='first-day'>1</li>
        {<CalendarDay month={month} year={year}/>}
    </ol>
    </>
}