function createAndSortTable() {
    let table_head = ["Name", "Strength", "Age"];
    let table_data = [
      { name: "Black Panther", strength: 66, age: 53 },
      { name: "Cap", strength: 79, age: 137 },
      { name: "Captain Marvel", strength: 97, age: 26 },
      { name: "Hulk", strength: 80, age: 49 },
      { name: "Iron-man", strength: 88, age: 48 },
      { name: "Spider-man", strength: 78, age: 16 },
      { name: "Thanos", strength: 99, age: 1000 },
      { name: "Thor", strength: 95, age: 1000 },
      { name: "Valkiria", strength: 73, age: 52 },
    ];
    function tableAdd(row, cell, parrent) {
      let parrent_var = document.getElementsByTagName(parrent)[0];
      let table = document.createElement("table");
      let table_head = document.createElement("thead");
      let table_body = document.createElement("tbody");
      table.appendChild(table_head);
      table.appendChild(table_body);
      let tr = document.createElement("tr");
      table_head.appendChild(tr);
      for (let i = 0; i < cell; i++) {
        let th = document.createElement("th");
        tr.appendChild(th);
      }
      for (let j = 0; j < row - 1; j++) {
        let tr = document.createElement("tr");
        table_body.appendChild(tr);
        for (let k = 0; k < cell; k++) {
          let td = document.createElement("td");
          tr.appendChild(td);
        }
      }
      parrent_var.appendChild(table);
    }
    tableAdd(10, 3, "main");
    let th = document.getElementsByTagName("th");
    for (let i = 0; i < th.length; i++) {
      document.getElementsByTagName("th")[i].id = "h" + i;
      document.getElementsByTagName("th")[i].textContent += table_head[i];
    }
    document.getElementById("h0").onclick = function () {
      sorting(table_data, "name");
      filling();
      message();
      sorting_value = "Name";
    };
    document.getElementById("h1").onclick = function () {
      sorting(table_data, "strength");
      filling();
      message();
      sorting_value = "Strength";
    };
    document.getElementById("h2").onclick = function () {
      sorting(table_data, "age");
      filling();
      message();
      sorting_value = "Age";
    };
    let td = document.getElementsByTagName("td");
    for (let i = 0; i < td.length; i += 3) {
      document.getElementsByTagName("td")[i].classList.add("name");
    }
    for (let i = 1; i < td.length; i += 3) {
      document.getElementsByTagName("td")[i].classList.add("strength");
    }
    for (let i = 2; i < td.length; i += 3) {
      document.getElementsByTagName("td")[i].classList.add("age");
    }
    function filling() {
      for (let i = 0; i < td.length / 3; i++) {
        document.getElementsByClassName("name")[i].textContent = table_data[i].name;
        document.getElementsByClassName("strength")[i].textContent = table_data[i].strength;
        document.getElementsByClassName("age")[i].textContent = table_data[i].age;
      }
    }
    let count = 0;
    function sorting(arr, property) {
      function ASC(field) {
        return (a, b) => {
          return a[field] < b[field] ? 1 : -1;
        }
      }
      function DESC(field) {
        return (a, b) => {
          return a[field] > b[field] ? 1 : -1;
        }
      }
      if (count === 0) {
        arr.sort(ASC(property));
        count++;
      } else {
        arr.sort(DESC(property));
        count--;
      }
    }
    let sorting_value = "Name",
      order = 'ASC';
      let main = document.getElementsByTagName("main")[0];
      let div = document.createElement("div");
      main.appendChild(div);
      document.getElementsByTagName("div")[2].classList.add("sort");
    function message() {
      if (count === 0) {
        order = "ASC";
      }
      if (count === 1) {
        order = "DESC";
      }
    }
    filling();
  }
  
  createAndSortTable();
  