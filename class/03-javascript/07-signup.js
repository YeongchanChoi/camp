const checkValidation=()=>{
    let pn1=document.getElementById("pn1").value
    let pn2=document.getElementById("pn2").value
    let pn3=document.getElementById("pn3").value
    if(pn1.length==3){       alert("asdas")
        document.getElementById("p2").focus()
 
    }
    if(pn1 !==""&&pn2!==""&&pn3!==""){
        //모든 인풋이 비어있지 않을때
        document.getElementById("send").disabled=false
    }
    else{
        //하나라도 비어있을 때
        document.getElementById("send").disabled=true
    }
}