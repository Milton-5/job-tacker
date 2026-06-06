function getValue(id){
    return document.getElementById(id).innerText;
}

function setValue(id,value){
    document.getElementById(id).innerText = value;
}

function getNumber(id){
    return Number(document.getElementById(id).innerText);
}

function showJobs(type){

    const cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {

        const status = card.querySelector(".status-btn").innerText;

        if(type === "all"){
            card.classList.remove("hidden");
        }

        else if(status === type){
            card.classList.remove("hidden");
        }

        else{
            card.classList.add("hidden");
        }
    });
}