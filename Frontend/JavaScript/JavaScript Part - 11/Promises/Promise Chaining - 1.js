
// ---: Promise Chaining - 1 :---

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

savetoDb("apna college")
.then(() => {
    
    console.log("data1 saved");
    
    savetoDb("helloworld")
    .then(() => {
        console.log("data2 saved");
    });

})
.catch(() => {
    console.log("Promise was rejected");
});

*/

/*

---> Method - 2 :-

*/

savetoDb("apna college")
.then(() => {
    console.log("data1 saved");
    return savetoDb("helloworld");
})
.then(() => {
    console.log("data2 saved");
    return savetoDb("Meet");
})
.then(() => {
    console.log("data3 saved");
})
.catch(() => {
    console.log("Promise was rejected");
});