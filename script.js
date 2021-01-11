let arr = [];
document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('input');

  input.addEventListener('change', () => {
    readXlsxFile(input.files[0]).then((data) => {
      arr = data;
    });
  });
});

let convertToDataTable = (arr) => {
  $('#table').DataTable({
    data: arr,
    columnDefs: [
      {
        targets: [arr[0].length],
        data: null,
      },
    ],
    dom: 'Bfrtip',
    buttons: ['copy', 'csv', 'pdf', 'print'],
  });
};

let convert = () => {
  convertToDataTable(arr);
};
