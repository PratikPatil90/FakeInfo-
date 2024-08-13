// let box = document.querySelector("#Container");
// let btn = document.querySelector("button");
// let para = document.querySelector("p");

// let url = "https://fakerapi.it/api/v1/persons?";

// btn.addEventListener("click", async ()=>{
//     // let para = document.querySelector("p");
//     let finfo = await  getFakeInfo();
//     console.log(finfo);
//     show(finfo);
// });

// function show(finfo){
//     para.innerText = `Name: ${finfo.firstname} ${finfo.lastname}\nEmail: ${finfo.email}\nPhone: ${finfo.phone}`;
// }
// async function getFakeInfo(){
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.data[0]);
//     }
//     catch(e)
//     {
//         console.log("Error :",e);
//     }
// }

let box = document.querySelector("#Container");
let btn = document.querySelector("button");
let para = document.querySelector("p");

let url = "https://fakerapi.it/api/v1/persons?";

btn.addEventListener("click", async () => {
    let finfo = await getFakeInfo();
    console.log(finfo);
    show(finfo);
});

function show(finfo) {
    para.innerText = `Name: ${finfo.firstname} ${finfo.lastname}\nEmail: ${finfo.email}\nPhone: ${finfo.phone}\nBirthDate: ${finfo.birthday}\nGender: ${finfo.gender}\nAddress: ${finfo.address.buildingNumber}, ${finfo.address.city}, ${finfo.address.street}, ${finfo.address.streetName}, ${finfo.address.zipcode}, ${finfo.address.country}`;
}

async function getFakeInfo() {
    try {
        let res = await axios.get(url);
        return res.data.data[0];  // Return the first person data
    } catch (e) {
        console.log("Error:", e);
    }
}