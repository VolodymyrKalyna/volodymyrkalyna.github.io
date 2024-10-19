let correctCount = 0;
        let totalCount = 0;
        let correctAnswer = 0;
        const maxNumber = 10;

        function nextTask() {
            const num1 = Math.floor(Math.random() * maxNumber) + 1;
            const num2 = Math.floor(Math.random() * maxNumber) + 1;
            correctAnswer = num1 * num2;
            document.getElementById("task").innerText = `${num1} * ${num2} =`;
            document.getElementById("answer").value = '';
            document.getElementById("result").innerText = '';
        }

        function checkAnswer() {
            const userAnswer = parseInt(document.getElementById("answer").value);
            totalCount++;

            if (userAnswer === correctAnswer) {
                correctCount++;
                document.getElementById("result").innerText = "Правильно!";
            } else {
                document.getElementById("result").innerText = `Помилка, правильна відповідь «${correctAnswer}»`;
            }

            document.getElementById("correctCount").innerText = correctCount;
            document.getElementById("totalCount").innerText = totalCount;

            document.getElementById('score').textContent = Math.floor((correctCount/totalCount) * 100)
        }

        window.onload = nextTask;