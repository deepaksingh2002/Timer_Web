const endDate = "01 january 2025 12:00 PM"
let displayDate = document.getElementById("end-date");
const input = document.querySelectorAll("input");
displayDate.innerHTML=endDate;
let countZero = false;
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const deffrance = (end - now) / 1000;
    if(deffrance <= 0){
        if(countZero != true){
            window.open("./wish.html");
            countZero = true;
        }
        return;
     }
    input[0].value=Math.floor(deffrance / 3600 / 24);
    input[1].value = Math.floor((deffrance / 3600) % 24);
    input[2].value = Math.floor((deffrance / 60) % 60 );
    input[3].value = Math.floor ((deffrance) % 60);
}
clock()
setInterval(()=>{
    clock(),1000})