let i = 0;
let txt = "Java Backend Developer.";
let speed = 150;

typeWriter()

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("user-detail-name").style.color = "aqua";
    document.getElementById("user-detail-name").style.fontWeight = "Bold";
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    // reset the index when it reaches the end of the text
    i = 0;
    // clear the text
    document.getElementById("demo1").innerHTML = "";
    // make the recursive call
    document.getElementById("user-detail-name").style.color = "white";
    setTimeout(typeWriter, speed);
  }
}


var myNav = document.getElementById('nav-menu');
var myNav2 = document.getElementById('main');
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    myNav.classList.add("nav-colored");
    myNav2.classList.add("nav-colored");
    // myNav.classList.remove("nav-transparent");
  }
  else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav2.classList.remove("nav-colored");
  }
};

GitHubCalendar(".calendar", "sshubham26", {
  responsive: true,
  global_stats: true,
  tooltips: true,
});

document.getElementById("resume-button-1").onclick = () => {
  window.open("https://drive.google.com/file/d/1mtOn3nD7WR2qo27P-e2YXtlQfoD6SGF-/view?usp=sharing")
}

document.getElementById("resume-button-2").onclick = () => {
  window.open("https://drive.google.com/file/d/1mtOn3nD7WR2qo27P-e2YXtlQfoD6SGF-/view?usp=sharing")
}


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "block";
}



// document.getElementById('goTOHackerrank').addEventListener("click", () => {
//   location.href = 'https://www.hackerrank.com/kishansharma6377?hr_r=1'
// })