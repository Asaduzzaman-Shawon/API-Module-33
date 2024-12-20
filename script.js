// function callF(){
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => displayData(data))
// }

// function displayData(data){
//     for(const i of data){
//         const nam = i.name
//         const body = i.body
//         const email = i.email
//         const commentSection = document.getElementById('comment-section')
//         const newComment = document.createElement('div')
//         newComment.innerHTML = `
//                 <h3>Name : ${nam} </h3>
//                 <p>${body}</p>
//                 <h5>${email}</h5>
//         `
//         commentSection.appendChild(newComment)
//         newComment.classList.add('post')
//     }
// }

// callF()
console.log(1);
console.log(2);
console.log(3);
function odd (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data){
    console.log(4)
}

console.log(5);

odd()

console.log(5);