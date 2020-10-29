// dataset.map((item, i) => {
//   $('#nav-dropdown').append(`
//     <a class="dropdown-item" href="#${i+1}">#${i+1}</a>
//   `);
// })

for (var i = 0; i < 50; i++) {
  $('#nav-dropdown').append(`
    <a class="dropdown-item" href="#${i+1}">#${i+1}</a>
  `);
}
