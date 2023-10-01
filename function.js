// get id
let dashboard=document.getElementById("dashboardSection");
let employee=document.getElementById("employeeSection");
let job=document.getElementById("jobSection");
let message=document.getElementById("messageSection");
let menu=document.getElementById("menu");

// get classes
// let dBtn= document.getElementsByClassName("dashboard-btn");
// let eBtn= document.getElementsByClassName("employee-btn");
// let jBtn= document.getElementsByClassName("job-btn");
// let mBtn= document.getElementsByClassName("message-btn");


function clickDashboard() {
  if (dashboard.style.display === "none") {
    dashboard.style.display = "block";
    // dashboard.classList.toggle = ".myItemStyling";
  } else {
    dashboard.style.display = "block";
    employee.style.display = "none";
    message.style.display = "none";
    job.style.display = "none";
  }
}
function clickEmployee() {
  if (employee.style.display === "none") {
    employee.style.display = "block";
  } else {
    employee.style.display = "block";
    dashboard.style.display = "none";
    message.style.display = "none";
    job.style.display = "none";
  }
}

function clickMessages() {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "block";
    employee.style.display = "none";
    dashboard.style.display = "none";
    job.style.display = "none";
  }
}

function clickJob() {
  if (job.style.display === "none") {
    job.style.display = "block";
  } else {
    job.style.display = "block";
    employee.style.display = "none";
    dashboard.style.display = "none";
    message.style.display = "none";
  }
}