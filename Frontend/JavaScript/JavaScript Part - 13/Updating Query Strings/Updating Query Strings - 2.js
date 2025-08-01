
// ---: Updating Query Strings - 2 :---

let url = "http://universities.hipolabs.com/search?name=India";

let btn = document.querySelector("button");

let inp = document.querySelector("input");

btn.addEventListener("click", async () => {
    
    let state = inp.value;
    
    let colArr = await getCollages();

    let uniOfState = colArr.filter((uni) => {
        
        if(uni["state-province"] == state)
        {
            return uni;
        }

    });

    show(uniOfState);

});

function show(stArr) {

    let list = document.querySelector("#list");

    list.innerText = "";

    for(col of stArr)
    {

        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;

        list.appendChild(li);

    }

}

async function getCollages() {

    try
    {
        let res = await axios.get(url);
        return res.data;
    }
    catch(e)
    {
        console.log("error :",e);
        return [];
    }

}