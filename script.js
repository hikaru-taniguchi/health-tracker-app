let records = [];

const recordForm = document.querySelector("#record-form");

recordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const date = document.querySelector("#date").value;
    const score = document.querySelector("#score").value;
    const drankYesterday = document.querySelector("#drank-yesterday").checked;
    const drankToday = document.querySelector("#drank-today").checked;
    const memo = document.querySelector("#memo").value;
    const badFactor = document.querySelector("#bad-factor").value;
    const goodFactor = document.querySelector("#good-factor").value;

    const record = {
        date: date,
        score: score,
        drankYesterday: drankYesterday,
        drankToday: drankToday,
        memo: memo,
        badFactor: badFactor,
        goodFactor: goodFactor
    };

    records.push(record);

    const recordList = document.querySelector("#record-list");
    const item = document.createElement("div");

    item.innerHTML = `
      <p>日付: ${record.date}</p>
      <p>体調: ${record.score}</p>
      <p>メモ: ${record.memo}</p>
    `;

    recordList.appendChild(item);

    console.log(records);
});