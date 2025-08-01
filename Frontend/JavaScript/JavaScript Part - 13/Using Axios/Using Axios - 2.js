
// ---: Using Axios :---

let btn = document.querySelector("button");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {

    let imgUrl = await getImages();
    console.log(imgUrl);

    let img = document.querySelector("#result");
    img.setAttribute("src", imgUrl);

});

async function getImages() {

    try
    {
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e)
    {
        console.log("ERROR -",e);
        return "/";
    }
    
}
