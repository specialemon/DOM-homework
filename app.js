//buttons

const addButton = document.querySelector("#formAdd")
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    addInfo();
    renderBox();
});

const verifyButton = document.querySelector("#formVerify")
verifyButton.addEventListener("click", function (event) {
    event.preventDefault();
    verifyInfo();
});

const updateButton = document.querySelector("#formUpdate")
updateButton.addEventListener("click", function (event) {
    event.preventDefault();
    updateInfo();
    renderBox();
});

const deleteButton = document.querySelector("#formDelete")
deleteButton.addEventListener("click", function (event) {
    event.preventDefault();
    deleteInfo();
    renderBox();
});

const viewDisplayButton = document.querySelector("#view")
viewDisplayButton.addEventListener("click", function (event) {
    event.preventDefault();
    viewDisplay();
    renderBox();
});

const addDisplayButton = document.querySelector("#add")
addDisplayButton.addEventListener("click", function (event) {
    event.preventDefault();
    addDisplay();
    renderBox();
});

const verifyDisplayButton = document.querySelector("#verify")
verifyDisplayButton.addEventListener("click", function (event) {
    event.preventDefault();
    verifyDisplay();
});

const updateDisplayButton = document.querySelector("#update")
updateDisplayButton.addEventListener("click", function (event) {
    event.preventDefault();
    renderBox();
    updateDisplay();
});

const deleteDisplayButton = document.querySelector("#delete")
deleteDisplayButton.addEventListener("click", function (event) {
    event.preventDefault();
    renderBox();
    deleteDisplay();
});


//vanilla display info
const renderBox = function () {
    $(".mainDisplay").html("");
    for (i = 0; i < employeeList.length; i++) {
        $(".mainDisplay").append(`<p class="infoBox">${employeeList[i].name} 
                                 ${employeeList[i].officeNum}
                                 ${employeeList[i].phoneNum}</p>`);
    }
    return;
}

//add info
const addInfo = function () {
    const name = $("#name").val();
    const officeNum = $("#officeNum").val();
    const phoneNum = $("#phoneNum").val();
    employeeList.push({ name: name, officeNum: officeNum, phoneNum: phoneNum });
    return;
}

//verify info
const verifyInfo = function () {
    const name = $("#name").val();
    let foundState = false;
    for (i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === name) {
            foundState = true;
        }
    }
    if (foundState == true) {
        $(".yesNo").text("yes");
        console.log("yes");
    }
    else {
        $(".yesNo").text("no");
        console.log("no");
    }
    return foundState;
}

//update/ modify info
const updateInfo = function () {
    const name = $("#name").val();
    const officeNum = $("#officeNum").val();
    const phoneNum = $("#phoneNum").val();
    if (verifyInfo() == true) {
        for (i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name === name) {
                employeeList[i].name = name;
                employeeList[i].officeNum = officeNum;
                employeeList[i].phoneNum = phoneNum;
            }
        }
    }
}

//delete info
const deleteInfo = function () {
    const name = $("#name").val();
    if (verifyInfo() == true) {
        for (i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name === name) {
                employeeList.splice(i,1);
            }
        }
    }
}

//view display

const viewDisplay = function () {
    $(".inputField").hide();
    $(".mainDisplay").show();
}

//add display

const addDisplay = function() {
    $(".all").hide();
    $(".add").show();
}

//verify display
const verifyDisplay = function() {
    $(".yesNo").text("");
    $(".all").hide();
    $(".mainDisplay").hide();
    $(".verify").show();
}

//update display
const updateDisplay = function() {
    $(".all").hide();
    $(".update").show();
}

//delete display
const deleteDisplay = function() {
    $(".all").hide();
    $(".delete").show();
}

viewDisplay();