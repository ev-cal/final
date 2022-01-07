const burger=document.querySelector('#burger');
const menu=document.querySelector('#menu');

burger.addEventListener('click',() => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})

var currentDate=new Date();

var year=currentDate.getFullYear();
document.getElementById("year").value=year


var month=currentDate.getMonth();
if (month==0) {
    document.getElementById("month").value="January"
}
else if (month==1) {
    document.getElementById("month").value="February"
}
else if (month==2) {
    document.getElementById("month").value="March"
}
else if (month==3) {
    document.getElementById("month").value="April"
}
else if (month==4) {
    document.getElementById("month").value="May"
}
else if (month==5) {
    document.getElementById("month").value="June"
}
else if (month==6) {
    document.getElementById("month").value="July"
}
else if (month==7) {
    document.getElementById("month").value="August"
}
else if (month==8) {
    document.getElementById("month").value="September"
}
else if (month==9) {
    document.getElementById("month").value="October"
}
else if (month==10) {
    document.getElementById("month").value="November"
}
else if (month==11) {
    document.getElementById("month").value="December"
}
else{
    document.getElementById("month").value="Loading"
}




