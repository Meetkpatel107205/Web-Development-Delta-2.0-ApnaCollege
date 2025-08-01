
// ---: Updating Query Strings - 1 :---

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

let inp = document.querySelector("input");

btn.addEventListener("click", async () => {
    
    let country = inp.value;
    
    let colArr = await getCollages(country);

    show(colArr);

});

function show(colArr) {

    let list = document.querySelector("#list");

    list.innerText = "";

    for(col of colArr)
    {

        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;

        list.appendChild(li);

    }

}

async function getCollages(country) {

    try
    {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e)
    {
        console.log("error :",e);
        return [];
    }

}