"use strict"
const name = document.querySelector("#name")
const pass = document.querySelector("#pass")
const form = document.querySelector("#form")
const error = document.querySelector("#error")

form.addEventListener('submit', (e)=>{
    let messages = [];
    if (name.value.length === "" || name.value.length === null){
        messages.push("Name is required")
    }
    if (messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
    if (name.value.length <= 6){
        alert("Your name must be at least 6 characters")
    }
    if (name.value.length >= 20){
        alert("Your name must be less than 20 characters")
    }

    if (pass.value.length === "" || pass.value.length === null){
        messages.push("Password is required")
    }
    if (pass.value.length <= 6){
        alert("Your password must be at least 6 characters")
    }
    if (pass.value.length >= 20){
        alert("Your password must be less than 20 characters")
    }


})

// const submit = (e) => {
//     if (pass.value.length === "" || pass.value.length === null){
//     alert("Enter your password")
// }
//     if (pass.value.length <= 6){
//         alert("Your password must be at least 6 characters")
//     }
//     if (pass.value.length >= 20){
//         alert("Your password must be less than 20 characters")
//     }
//
// }


// llll














