//your JS code here. If required.
        const board = document.getElementById("board");
        for (let i = 0; i < 800; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "#3498db";
                setTimeout(() => {
                    square.style.backgroundColor = "#ddd";
                }, 1000);
            });
            board.appendChild(square);
        }