const aa=()=>{
    const inputYear=document.getElementById("target-year-input").value
    const inputMonth=document.getElementById("target-month-input").value
    const inputDate=document.getElementById("target-date-input").value
    console.log(inputYear,inputMonth,inputDate)

    const newDate=new Date()
    const targetDate=new Date('2024-02-13')
    const remaining=(targetDate-newDate)/1000
    const remainingDate=Math.floor((remaining/3600)/24)
    const remainingHours=Math.floor((remaining/3600))-24*remainingDate
    const remainingMins=Math.floor((remaining/60))-60*remainingHours-1440*remainingDate
    const remainingSec=Math.floor(remaining)-60*remainingMins-3600*remainingHours-86400*remainingDate

    const dataFormat=remainingDate+"D-"+remainingHours+"H-"+remainingMins+"M-"+remainingSec+"S"
    console.log(dataFormat)
}