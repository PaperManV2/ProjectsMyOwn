const modalOn = document.getElementById("add");
const modalOff = document.getElementById("modalOff");
const modal = document.getElementById("overlay");
const text = document.querySelector("#modal textarea");
const addNew = document.getElementById("addToList");
const listOfPosts = document.getElementById("listOfNotes");
const body = document.querySelector("body");

let post = "";

modalOn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  post = "";
});

modalOff.addEventListener("click", () => {
  text.value = "";
  modal.classList.add("hidden");
});

function notifiction(message) {
  body.insertAdjacentHTML("beforeend", `<div class=notify>${message}</div>`);
  setTimeout(() => {
    const notify = document.querySelector(".notify");
    notify.remove();
  }, 5000);
}

addNew.addEventListener("click", () => {
  post = text.value;

  if (post.trim() != "") {
    var date = new Date();
    var title = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    title = title.split(" ");

    title[0] = title[0].replaceAll("/", ".");
    title[1] = title[1].replaceAll(":", "-");
    title = title.join(" ");

    console.log(title);
    fetch(`/save_text/${title}`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: post }),
    }).catch((error) => console.error("Error:", error));

    modal.classList.add("hidden");
  } else {
    notifiction("Sory but u need to type something");
  }
});

function removeNote(title) {
  fetch(`/remove/${title}`, {
    method: "POST",
  }).catch((error) => console.error("Error:", error));
}
