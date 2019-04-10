let mountains = [{
        Name: "Name1",
        Height: 1658,
        Place: "Place1"
    },
    {
        Name: "Name2",
        Height: 1654,
        Place: "Place2"
    },
    {
        Name: "Name3",
        Height: 1520,
        Place: "Place3"
    },
    {
        Name: "Name4",
        Height: 1592,
        Place: "Place4"
    },
    {
        Name: "Name5",
        Height: 1738,
        Place: "Place5"
    }
];

let rivers = [
    {
        Name: "Name1",
        Length: "388 km",
        Source: "Source1"
    },
    {
        Name: "Name2",
        Length: "388 km",
        Source: "Source2"
    },
    {
        Name: "Name3",
        Length: 1592,
        Source: "Source3"
    },
    {
        Name: "Name4",
        Length: 1592,
        Source: "Source4"
    }

];



function generateTableHead(table, data) {
    let thead = document.createElement("thead");
    thead.setAttribute("class","THead");
    table.appendChild(thead);
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    let tbody = document.createElement("tbody");
    tbody.setAttribute("class","TBody");
    table.appendChild(tbody);

    for (let element of data) {
        let row = tbody.insertRow();

        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");

let data1 = Object.keys(mountains[0]);
let data2 = Object.keys(rivers[0]);

generateTableHead(table, data1);
generateTable(table, mountains);

generateTableHead(table, data2);
generateTable(table, rivers);
