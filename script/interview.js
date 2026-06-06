document.querySelectorAll(".interview-btn")
.forEach(button => {

    button.addEventListener("click",function(){

        const card = event.target.closest(".job-card");

        const statusBtn = card.querySelector(".status-btn");

        let interview = getNumber("interview-count");

        let rejected = getNumber("rejected-count");

        if(statusBtn.innerText === "REJECTED"){
            rejected--;
            setValue("rejected-count",rejected);
        }

        if(statusBtn.innerText !== "INTERVIEW"){

            interview++;
            setValue("interview-count",interview);

            statusBtn.innerText = "INTERVIEW";
        }

    });

});