const list =document.getElementById('list');
const menu= document.getElementById('menubar');

menu.addEventListener('click', ()=>{
    if(list.style.display=="none"){
        list.style.display="block";
    }
    else{
        list.style.display="none"
    }
});