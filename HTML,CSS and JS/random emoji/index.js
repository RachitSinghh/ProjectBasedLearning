 const btnEl = document.getElementById("btn");
 const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=8b1e1f96a3f0bde42b9eb308719fe2879306a46d");

    data = await response.json();

  for(let i=0; i<1500; i++){
    emoji.push({
        emojiName:data[i].character,
        emojiCode:data[i].unicodeName,
    })
  };
}

getEmoji()



 btnEl.addEventListener("click", ()=>{

    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;

 })