const textArea = document.getElementById('textarae');
const character=document.getElementById('cc');
const word=document.getElementById('cw');
textArea.oninput = () => {
    let characters =  textArea.value;
    // console.log("Input detected!"); 
    // console.log(characters);
    character.textContent= characters.replace(/\s/g,'').length;
    // let replace=textArea.value.replace(/./g,' ');
    let words=textArea.value.split(' ').filter((item)=>{
        return item!='';
    });
    word.textContent= words.length;
};
function index()
{
    location.href="./index.html";
}
function clearCounts() {
    document.getElementById('cc').innerHTML = "0";
    document.getElementById('cw').innerHTML = "0";
    textArea.value = "";
}
