const endDate ="20 June 2023 01:32 PM"
document.getElementById('endDate').innerText=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff=(end-now)/1000;
    if(diff<0){
        return;
    }
    console.log(diff / 60/ 60 / 24);
    inputs[0].value=Math.floor(diff / 3600 / 24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
    //convert into days 

}
setInterval(()=>clock(),1000)