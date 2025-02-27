function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        const board = document.getElementById("board");
        for (let i = 0; i < 800; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                const randomColor = getRandomColor();
                square.style.backgroundColor = randomColor;
                setTimeout(() => {
                    square.style.backgroundColor = "#ddd";
                }, 1000);
            });
            board.appendChild(square);
        }