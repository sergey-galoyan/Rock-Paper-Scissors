let games=[{
    id:1,
    name:"rock",
    win:3,
},{
    id:2,
    name:"paper",
    win:1,
},{
    id:3,
    name:"scissors",
    win:2,
}]

let winner=document.querySelector(".winner")
let feature=document.querySelector(".feature")
games.forEach(res=>{
    feature.innerHTML+=`<button data-id="${res.id}" class="tool"><img src="${res.name}.png"></button>`
})
let tools=document.querySelectorAll(".tool")
let hand=document.querySelectorAll(".hand")
let imgElements = document.querySelectorAll(".tool img");
let st
imgElements.forEach(img => {
    img.addEventListener("click", function (e) {
        if (st) {
            clearTimeout(st)
        }
        let id = img.parentElement.dataset.id;
        let c_id = Math.floor(Math.random() * games.length);
        hand[0].classList.add('anim')
        hand[1].classList.add('anim')
        hand[0].style.backgroundImage = `url("rock.png")`;
        hand[1].style.backgroundImage = `url("rock.png")`;
        hand[0].classList.add('anim');
        hand[1].classList.add('anim');
        st=setTimeout(()=>{
            checkgames(+id,games[c_id])

            hand[0].classList.remove('anim')
            hand[1].classList.remove('anim')
        },2300)
    })
})
function checkgames(id,c_id){
    id=games.find(res=>res.id===id)
    if (id.id===c_id.id){
        hand[0].style.backgroundImage = `url("${c_id.name}.png")`;
        hand[1].style.backgroundImage = `url("${id.name}.png")`;
        hand[0].classList.remove('anim');
        hand[1].classList.remove('anim');
        winner.innerHTML="Draw! 🤝🏼"
    }else if(c_id.win===id.id){
        console.log("Computer Won",c_id.name,id)
        hand[0].style.backgroundImage = `url("${c_id.name}.png")`;
        hand[1].style.backgroundImage = `url("${id.name}.png")`;
        hand[0].classList.remove('anim');
        hand[1].classList.remove('anim');
        winner.innerHTML="Computer Won! 😁"
    }else{
        hand[0].style.backgroundImage = `url("${c_id.name}.png")`;
        hand[1].style.backgroundImage = `url("${id.name}.png")`;
        hand[0].classList.remove('anim');
        hand[1].classList.remove('anim');
        winner.innerHTML="User Won! 😯"
    }
}
