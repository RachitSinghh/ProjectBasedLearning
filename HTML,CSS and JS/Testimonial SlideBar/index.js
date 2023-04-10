const testimonial = [

    {
        name: "Cherise G",
        photoUrl:  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Nice work on your apple. Apple should be nominated for service of the year. We've used apple for the last five years. I have gotten at least 50 times the value from apple.",
        
    },
    {
        name: "Lenora Z",
        photoUrl:  "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
        text: "I am so pleased with this product. You won't regret it. It's all good. Apple was the best investment I ever made.",
    },
    {
        name: "Luisa S",
        photoUrl:  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        text:"It's really wonderful. After using apple my business skyrocketed! Since I invested in apple I made over 100,000 dollars profits.",
    },
    {
        name: "TOP G",
        photoUrl: 
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Absolutely wonderful! Apple is both attractive and highly adaptable. After using apple my business skyrocketed!",
    },
];

const imgEL = document.querySelector("img");
const textEL = document.querySelector(".text");
const usernameEL = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name,photoUrl, text} = 
    testimonial[idx];
    imgEL.src = photoUrl;
    textEL.innerText = text;
    usernameEL.innerText =  name;
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}