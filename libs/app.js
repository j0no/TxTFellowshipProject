let ascendingOrderArray = (arr) => {
    console.log("Sorting using Bubble Sort")
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                var t = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = t;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

let outputBox = document.getElementById("outputBox");
let outputMsg = document.getElementById("outputMsg");
let outputHeading = document.getElementById("outputHeading");

let outputToDOMSuccess = (arr) => {
    outputHeading.innerHTML = "Ascending Sort"
    outputBox.style.backgroundColor = "#6FCF97";
    var str = "";
    for(var i = 0; i < arr.length; i++){
        if(arr.length == i + 1){
            str += arr[i]
        } else {
            str += arr[i] + ", "
        }
    }
    outputMsg.innerHTML = str;
}
let outputToDOMError = () => {
    outputBox.style.backgroundColor = "red";
    outputHeading.innerHTML = "";
    outputMsg.innerHTML = "Error"
}

let go = () => {
    var arr = [];
    let inputs = document.getElementsByClassName("input");
    var error = false;
    for(var i = 0; i < inputs.length; i++){
        var t = parseInt(inputs[i].value);
        if(t) {
            arr[i] = t;
            console.log(arr[i])
        }
        else {
            error = true;
            break;
        }
    }
    if(!error){
        var newArr = ascendingOrderArray(arr);
        outputToDOMSuccess(newArr);
    } else {
        outputToDOMError();

    }
}

let goButton = document.getElementById("go");
goButton.addEventListener("click", go);