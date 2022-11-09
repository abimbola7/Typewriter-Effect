let strArray = ['My name is Abimbola', "I study Software Engineering at SQI", "My Instructor's name is Dev Teslim"];
let i = 0;
let index = 0;

function start() {
    if (i >= strArray.length) {
        i = 0;
    }
    to_write = strArray[i] // grabs each index of the array
    writeIt(to_write)
}

function writeIt(writes) {
    out.innerHTML += writes[index] // looping through the sentences
    index++
    setTimeout(() => {
        if (writes[index]) {
            writeIt(writes);
        } else{
            i++;
            index = 0
            setTimeout(() => {
                del()
            }, 2000);
        }
    }, 100);    
}

function del() {
    let slices = out.innerHTML
    let a = slices.slice(out.innerHTML, -1);
    out.innerHTML = a;
    setTimeout(() => {
        if (out.innerHTML == "") {
            start()
        } else{
            del()
        }
    }, 100); 
}
start()