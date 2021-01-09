document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('input');
  let table = document.getElementById('table');

  input.addEventListener('change', () => {
    readXlsxFile(input.files[0]).then((data) => {
      // table.innerHTML = null;

      // table.DataTable({
      //   dom: 'Bfrtip',
      //   buttons: ['csv', 'copy', 'pdf', 'print'],
      // });

      var i = 0;
      data.map((row) => {
        i == 0 && generateTableHead(table, row);
        i > 0 && generateTableRows(table, row);
        i++;
      });
    });
  });
});

let generateTableHead = (table, data) => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};

let generateTableRows = (table, data) => {
  let newRow = table.insertRow(-1);
  data.map((row) => {
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(row);
    newCell.appendChild(newText);
  });
};
