// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://www.boredapi.com/api/activity')
// xhr.onreadystatechange=function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const data =  JSON.parse(xhr.responseText)
//         console.log(data);
//        console.log(data.activity);
//         console.log(data.type);
//         console.log(data.participants);
//         console.log(data.price);
//     }
// }
// console.log(xhr.readyState);
// xhr.send();
// let ip;
// fetch('https://api.ipify.org?format=json')
// .then(function(data){
//     return data.json()
// })
// .then(function(data){
//     console.log(data.ip);
//   //  ip = data.ip;
// })
// .catch(function(e){
//     console.log("E: ", e);
// })

let newapi = `https://ipinfo.io//geo`;
// let ipdata;

// .then((data) => {
//     return data.json()
// })
// .then((data) => {
//     ipdata = data;
    
// })
// .catch((e) => {
//     console.log("E: ",e);
// })

// console.log(ipdata);

async function dataip(){
   
    try{
 const data = await fetch(newapi)
  const  data1  = await data.json()
    console.log(data1);
     const body = document.querySelector("body")
    body.style.backgroundColor = "#212121"
    body.style.color = "#ffff"
    document.querySelector("#IP").innerHTML = `
    
    <div id="ipdata" style="text-color:"#ffff"">
    
    <table  style="border: solid 3px #ffff">
  <tr >
    <th  style="border: solid blue">ip</th>
    <th style="border: solid blue">City</th>
    <th style="border: solid blue">Region</th>
    <th style="border: solid blue">Country</th>
    <th style="border: solid blue">Loc</th>
    <th style="border: solid blue">Postal</th>
    <th style="border: solid blue">Org</th>
  </tr>
  <tr>
    <td style="border: solid blue">${data1.ip}</td>
    <td style="border: solid blue">${data1.city}</td>
    <td style="border: solid blue">${data1.region}</td>
    <td style="border: solid blue">${data1.country}</td>
    <td style="border: solid blue">${(data1.loc)}</td>
    <td style="border: solid blue">${data1.postal}</td>
    <td style="border: solid blue">${data1.org}</td>
  </tr>
 
</table>
    
    </div>
    
    
    `
    }
    catch(e){
        console.log(e);
    }
}

dataip()

