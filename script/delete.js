document.querySelectorAll(".delete-btn").forEach(button => {

    button.addEventListener("click",function(){

        const card =event.target.closest(".job-card");

        const status = card.querySelector(".status-btn").innerText;

        let total = getNumber("total-count");

        let interview = getNumber("interview-count");

        let rejected = getNumber("rejected-count");

        if(status === "INTERVIEW"){
            interview--;
            setValue("interview-count",interview);
        }

        if(status === "REJECTED"){
            rejected--;
            setValue("rejected-count",rejected);
        }

        total--;
        setValue("total-count",total);

        card.remove();
    });
}); 

