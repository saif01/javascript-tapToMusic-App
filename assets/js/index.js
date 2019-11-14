window.addEventListener('load', ()=>{

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    //console.log(sounds);

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function() {
           //for multiple click to play
           sounds[index].currentTime = 0;
           //by click to play  
           sounds[index].play();

           createBabbles(index);
        });
    });

    //makes bubbles
    const createBabbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";

        //remove Bubbles
        bubble.addEventListener('animationend', function() {
            visual.replaceChild(this);
        });
    }


});

