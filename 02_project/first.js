const add_friend = document.querySelector("#add")
const remove=document.querySelector("#remove")
const action = document.querySelector("h4")

console.log(action);

add_friend.addEventListener("click", (e) => {
    action.innerHTML = "Friend";
    action.style.color = "green";
})
remove.addEventListener("click", (e) => {
    action.innerHTML = "Stranger";
    action.style.color = "red";
})

