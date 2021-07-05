const doctors=[ "Charlie Moon","Coni Star","Kisten Misel","John Nission","Rose Moon"];
const hospitals =["Apollo Hospital","Fortis  Hospital","Rockland Hospital","Primus Super Speciality Hospital"];
const treatments=["Dentistry","Orthopedic Surgery","Cancer","Cardiology"];
const masterArray=[doctors,hospitals,treatments]

const searchWrapper=document.querySelector(".search1");
const inputBox=searchWrapper.querySelector("input");
const searchBox=searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup=(e)=>{
    let userData=e.target.value;
    let emptyArray=[];
    if (userData){
        emptyArray=doctors.filter((data)=>{
            return data.toLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray=emptyArray.map((data)=>{
            return data="<li>"+data+"</li>";
        })
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggesions(emptyArray);
        let allList=searchBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick","select(this)");            
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectUserData=element.textContent;
    inputBox.value=selectUserData;
    searchWrapper.classList.remove("active");
    
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