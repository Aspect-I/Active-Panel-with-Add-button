const panel = document.querySelector(".controlPanel");

const sectionDaily = document.querySelector(".sectionDailyFocus");
const inputBarDaily = document.querySelector(".inputBarDaily");
const dailyFocusPanel = document.querySelector(".dailyFocusPanel");

const sectionTodo = document.querySelector(".sectionTodo");
const inputBarTodo = document.querySelector(".inputBarTodo");

const sectionNotebles = document.querySelector(".sectionNotebles");
const inputBarNotebles = document.querySelector(".inputBarNotebles");

sectionDaily.classList.add("active");
dailyFocusPanel.classList.add("active");

function activePanelSort() {
  const child = panel.children;
  const newPanel = [];

  for (let i = 0; i < child.length; i++) {
    const panelName = child[i].className;

    const foundActive = panelName.search("active");

    if (foundActive !== -1) {
      newPanel.unshift(child[i]);

      if (child[i].className == "dailyFocusPanel active") {
        sectionDaily.classList.add("active");
        sectionTodo.classList.remove("active");
        sectionNotebles.classList.remove("active");
      }

      if (child[i].className == "todoPanel active") {
        sectionTodo.classList.add("active");
        sectionDaily.classList.remove("active");
        sectionNotebles.classList.remove("active");
      }

      if (child[i].className == "noteblesPanel active") {
        sectionNotebles.classList.add("active");
        sectionTodo.classList.remove("active");
        sectionDaily.classList.remove("active");
      }
    } else {
      newPanel.push(child[i]);
    }
  }
  panel.innerHTML = "";
  for (let i = 0; i < newPanel.length; i++) {
    panel.innerHTML += `${newPanel[i].outerHTML}`;
  }
}

panel.addEventListener("click", async (e) => {
  if (e.target.tagName.toLowerCase() === "i") {
    // console.log(e.target.id == "plusBtn-todo");

    if (e.target.id == "plusBtn-dailyFocus") {
      inputBarDaily.classList.toggle("active");
    }

    if (e.target.id == "plusBtn-todo") {
      inputBarTodo.classList.toggle("active");
    }

    if (e.target.id == "plusBtn-notebles") {
      inputBarNotebles.classList.toggle("active");
    }
  }

  if (e.target.tagName.toLowerCase() === "button") {
    inputBarDaily.classList.remove("active");
    inputBarTodo.classList.remove("active");
    inputBarNotebles.classList.remove("active");

    let parentDiv = e.target.closest("div");
    const activePanel = parentDiv.className;
    const child = panel.children;
    // console.log(activePanel);
    // console.log(e.target);
    // console.log(child);

    for (let i = 0; i < child.length; i++) {
      const panelName = child[i].className;

      if (panelName == activePanel) {
        // console.log(child[i].children[1]);
        child[i].classList.add("active");
        child[i].children[1].classList.remove("inactive");
      } else {
        child[i].classList.remove("active");
        child[i].children[1].classList.add("inactive");
      }
    }
    activePanelSort();
  }
});
