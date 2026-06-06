document.getElementById("all-jobs").addEventListener("click",function(){
    showJobs("all");
});

document.getElementById("interview-jobs-btn").addEventListener("click",function(){
    showJobs("INTERVIEW");
});

document.getElementById("rejected-jobs-btn").addEventListener("click",function(){
    showJobs("REJECTED");
}); 

