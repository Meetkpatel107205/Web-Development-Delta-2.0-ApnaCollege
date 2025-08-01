
// ---: Promise :---

function savetoDb(data) {

    return new Promise((resolve, reject) => {
        
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if(internetSpeed > 4)
        {
            resolve("success : data was saved");
        }
        else
        {
            reject("failure : weak connection");
        }
    });

}

/*

---> Method - 1 :-

let request = savetoDb("apna college") ---> req = promise object

request.then(() => {
    console.log("Promise was resolved");
    console.log(request);
})
.catch(() => {
    console.log("Promise was rejected");
    console.log(request);
});

*/

/*

---> Method - 2 :-

*/

savetoDb("apna college")
.then(() => {
    console.log("Promise was resolved");
})
.catch(() => {
    console.log("Promise was rejected");
});
