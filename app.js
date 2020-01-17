let cells= document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener('click', cellclicked);    
});

function cellclicked(e) {
  e.target.textContent = 'hello';
}