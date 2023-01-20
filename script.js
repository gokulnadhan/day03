function getdata(){
    fetch('./script.json').then((response) => response.json()).then((data) => renderjson(data));
}
getdata()
function renderjson(data){
    const element=document.getElementById('jsonviewer')
    element.innerText=JSON.stringify(data)
}