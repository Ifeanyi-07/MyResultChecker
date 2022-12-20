let calculate=()=>{
    let maths=document.getElementById("maths").value
    let eng=document.getElementById("eng").value
    let chem=document.getElementById("chem").value
    let phy=document.getElementById("phy").value
    let geo=document.getElementById("geo").value
    let bio=document.getElementById("bio").value
    let comp=document.getElementById("comp").value
    let container=document.querySelector(".container")
    let text2=document.querySelector(".txt2")

    container.addEventListener("click",function(e){
        e.preventDefault()

    



    if(maths=="" || eng=="" || chem=="" || phy=="" || geo=="" || bio=="" || comp==""){
            document.getElementById("error-msg").innerHTML="Input all fields!"
            text2.style.display="none"
            

            setTimeout(()=>{
                window.location.reload(true)
            },4000)
        
    }
    

    let total=parseFloat(maths)+parseFloat(eng)+parseFloat(chem)+parseFloat(phy)+parseFloat(geo)+parseFloat(bio)+parseFloat(comp);
    let per=(total/700)*100;

    
    document.querySelector(".txt2").innerHTML=`Out of 700 your total score is ${total} <br> 
    and percentage is ${per}%`;
})


}

    

    



