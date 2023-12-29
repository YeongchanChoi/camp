const send=()=>{
    const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("code").innerText=token
    document.getElementById("code").style.color="#"+token
    let sec=3
    setInterval(function(){
        if(sec>=0){
            let min=Math.floor(sec/60)
            let seco=sec-min*60
            let secon=String(seco).padStart(2,"0")
            document.getElementById("time").innerText=min+":"+secon
            sec=sec-1}
        if(sec==0){
            document.getElementById("acc").disabled=true
        }
    },1000)
}