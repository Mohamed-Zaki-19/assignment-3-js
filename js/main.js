
var websiteName = document.getElementById("sn");
var siteUrl = document.getElementById("su");


var allwebsites = [];

if(localStorage.getItem("allwebsites") != null) {
    allwebsites = JSON.parse(localStorage.getItem("allwebsites"));
    Display();  
}


function submination() {

    if( isvalidURL(siteUrl.value) ) {
        var website = {
            name: websiteName.value,
            link: siteUrl.value
        }
    
        allwebsites.push(website);
        localStorage.setItem("allwebsites" , JSON.stringify(allwebsites));
        cleardata();
        Display();
    }
    else {
        alert("url is not valid");
    }
}


function cleardata() {
    websiteName.value = "";
    siteUrl.value = "";
}


function Display() {
    var cartona = "";

    for(var i = 0 ; i < allwebsites.length ; i++) {
        cartona += ` <tr>
        <td class="fs-5">${i+1}</td>
        <td>${allwebsites[i].name}</td>
        <td>
            <button onclick="Visit(${i})" class="btn btn-success text-white">
                <i class="fa-solid fa-eye"></i>
                Visit
            </button>
        </td>
        <td>
            <button onclick="Delete(${i})" class="btn btn-danger text-white">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </td>
    </tr>`
    }

    document.getElementById("tbody").innerHTML = cartona;
    
}


function Delete(i) {
    allwebsites.splice(i ,1);
    localStorage.setItem("allwebsites" , JSON.stringify(allwebsites));
    Display();
}


function Visit(i) {
    window.open(
        allwebsites[i].link,
        '_blank'
    );
}


function isvalidURL(url) {
    try {
        new URL(url);
        return true;
    }
    catch (err){
        return false;
    }
}