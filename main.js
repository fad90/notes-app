const notesEl = document.querySelector(".notes"),
    addBtn = document.querySelector(".add");

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea class="textarea"></textarea>
    `;

    const editBtn = note.querySelector(".edit"),
          deleteBtn = note.querySelector(".delete"),
          textArea = note.querySelector(".textarea"),
          main = note.querySelector(".main");

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
    });
    

    document.body.appendChild(note);
}



