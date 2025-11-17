let display;

const derceasebtn = document.getElementById("Decreasebtn").onclick =function(){
    let countlabel = document.getElementById("countlabel").textContent;
    display = Number(countlabel);
    display-=1;
    document.getElementById("countlabel").textContent=display;
}

const increasebtn = document.getElementById("Increasebtn").onclick =function(){
    let countlabel = document.getElementById("countlabel").textContent;
    display = Number(countlabel);
    display+=1;
    document.getElementById("countlabel").textContent=display;
}

const resetbtn = document.getElementById("Resetbtn").onclick = function(){
    let countlabel = document.getElementById("countlabel").textContent;
    display = Number(countlabel);
    display=0;
    document.getElementById("countlabel").textContent=display;

}