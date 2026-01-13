function createInputs() {
    let count = document.getElementById("count").value;
    let div = document.getElementById("subjects");
    div.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        div.innerHTML += `
            <input placeholder="Subject ${i}">
            <select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
        `;
    }
}

function generatePlan() {
    let subjects = document.querySelectorAll("#subjects input");
    let levels = document.querySelectorAll("#subjects select");
    let hours = document.getElementById("hours").value;
    let days = document.getElementById("days").value;

    let total = 0;
    let weights = [];

    levels.forEach(l => {
        let w = l.value === "Easy" ? 1 : l.value === "Medium" ? 2 : 3;
        weights.push(w);
        total += w;
    });

    let output = "<h3>Study Plan</h3>";

    for (let d = 1; d <= days; d++) {
        output += `<b>Day ${d}</b><br>`;
        subjects.forEach((s, i) => {
            let time = (weights[i] / total * hours).toFixed(2);
            output += `${s.value}: ${time} hours<br>`;
        });
        output += "<br>";
    }

    document.getElementById("output").innerHTML = output;
}
