const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

var currentDate = new Date();

var year = currentDate.getFullYear();

var cp_year =currentDate.getFullYear();
var y = year;
document.getElementById("cpyear").value= cp_year
document.getElementById("year").value = year


var month = currentDate.getMonth();
// var k = month
if (month == 0) {
    document.getElementById("month").value = "January"
}
else if (month == 1) {
    document.getElementById("month").value = "February"
}
else if (month == 2) {
    document.getElementById("month").value = "March"
}
else if (month == 3) {
    document.getElementById("month").value = "April"
}
else if (month == 4) {
    document.getElementById("month").value = "May"
}
else if (month == 5) {
    document.getElementById("month").value = "June"
}
else if (month == 6) {
    document.getElementById("month").value = "July"
}
else if (month == 7) {
    document.getElementById("month").value = "August"
}
else if (month == 8) {
    document.getElementById("month").value = "September"
}
else if (month == 9) {
    document.getElementById("month").value = "October"
}
else if (month == 10) {
    document.getElementById("month").value = "November"
}
else if (month == 11) {
    document.getElementById("month").value = "December"
}
else {
    document.getElementById("month").value = "Loading"
}

// function next_month() {
//     if (window.k >= 0 && window.k <= 13) {
//         window.k = window.k + 1;
//         if (window.k == 1) {
//             document.getElementById("month").value = "February"
//         }
//         else if (window.k == 2) {
//             document.getElementById("month").value = "March"
//         }
//         else if (window.k == 3) {
//             document.getElementById("month").value = "April"
//         }
//         else if (window.k == 4) {
//             document.getElementById("month").value = "May"
//         }
//         else if (window.k == 5) {
//             document.getElementById("month").value = "June"
//         }
//         else if (window.k == 6) {
//             document.getElementById("month").value = "July"
//         }
//         else if (window.k == 7) {
//             document.getElementById("month").value = "August"
//         }
//         else if (window.k == 8) {
//             document.getElementById("month").value = "September"
//         }
//         else if (window.k == 9) {
//             document.getElementById("month").value = "October"
//         }
//         else if (window.k == 10) {
//             document.getElementById("month").value = "November"
//         }
//         else if (window.k == 11) {
//             document.getElementById("month").value = "December"
//         } else if (window.k == 12) {
//             document.getElementById("month").value = "January"
//         } else {
//             window.k = 0;
//             next_month();
//         }
//     }
// }

function next_month(){
    const lastday=document.querySelector("#row_31")
    const second_lastday=document.querySelector("#row_30")
    if(document.getElementById("month").value=="January"){
        document.getElementById("month").value="February"
        lastday.classList.add("hidden")
        second_lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="February"){
        document.getElementById("month").value="March"
        second_lastday.classList.remove("hidden")
        lastday.classList.remove("hidden")

    }else if(document.getElementById("month").value=="March"){
        document.getElementById("month").value="April"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="April"){
        document.getElementById("month").value="May"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="May"){
        document.getElementById("month").value="June"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="June"){
        document.getElementById("month").value="July"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="July"){
        document.getElementById("month").value="August"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="August"){
        document.getElementById("month").value="September"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="September"){
        document.getElementById("month").value="October"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="October"){
        document.getElementById("month").value="November"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="November"){
        document.getElementById("month").value="December"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="December"){
        document.getElementById("month").value="January"
        lastday.classList.remove("hidden")
    }
}








function prev_month(){
    const lastday=document.querySelector("#row_31")
    const second_lastday=document.querySelector("#row_30")
    if(document.getElementById("month").value=="January"){
        document.getElementById("month").value="December"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="February"){
        document.getElementById("month").value="January"
        lastday.classList.remove("hidden")
        second_lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="March"){
        document.getElementById("month").value="February"
        second_lastday.classList.add("hidden")
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="April"){
        document.getElementById("month").value="March"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="May"){
        document.getElementById("month").value="April"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="June"){
        document.getElementById("month").value="May"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="July"){
        document.getElementById("month").value="June"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="August"){
        document.getElementById("month").value="July"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="September"){
        document.getElementById("month").value="August"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="October"){
        document.getElementById("month").value="September"
        lastday.classList.add("hidden")
    }else if(document.getElementById("month").value=="November"){
        document.getElementById("month").value="October"
        lastday.classList.remove("hidden")
    }else if(document.getElementById("month").value=="December"){
        document.getElementById("month").value="November"
        lastday.classList.add("hidden")
    }
}

function prev_year() {
    window.y = window.y - 1;
    document.getElementById("year").value = window.y
}

function next_year() {
    window.y = window.y + 1;
    document.getElementById("year").value = window.y
}







