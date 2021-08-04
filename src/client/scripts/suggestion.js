const doctors=[ "Charlie Moon","Coni Star","Kisten Misel","John Nission","Rose Moon"];
const hospitals =["Apollo Hospital","Fortis  Hospital","Rockland Hospital","Primus Super Speciality Hospital"];
const treatments=["Dentistry","Orthopedic Surgery","Cancer","Cardiology"];
const masterArray=doctors.concat(hospitals,treatments)

const searchWrapper=document.querySelector(".search1");
const hide=document.querySelector(".autocom-box");
const inputBox=searchWrapper.querySelector("input");
const searchBox=searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup=(e)=>{
    let userData=e.target.value;
    let emptyArray=[];
    if (userData){
        emptyArray=masterArray.filter((data)=>{
            return data.toLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray=emptyArray.map((data)=>{
            return data="<li>"+data+"</li>";
        })
        console.log(emptyArray);
        hide.style.display = 'block';
        showSuggesions(emptyArray);
        let allList=searchBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick","select(this)");            
        }
    }else{
        hide.style.display = 'none';
    }
}

function select(element){
    let selectUserData=element.textContent;
    inputBox.value=selectUserData;
    hide.style.display = 'none';  
}

function showSuggesions(list){
    let listData;
    if(!list.length){
        listData="<li>"+"Data Not Found"+"</li>";
    }else{
        listData=list.join("");
    }
    searchBox.innerHTML=listData;
}

var button = document.getElementById("searchButton");
button.onclick = function () {
    var text = document.getElementById("myInput").value;

    for (let j = 0; j < text.length; j++) 
    {        
        if (text==doctors[j]) { window.open("../doctor"); }

        else if (text==hospitals[j]) { window.open("../hospital"); }

        else if (text==treatments[j]) { window.open("../treatments"); }
    }
}