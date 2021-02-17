const button = document.createElement('button');

function moveNext() {
  button.addEventListener('click', (event) => {
    const array1 = [images];
    const listContainer = document.createElement('ul');
    const target = document.querySelector('.next');
    target.append(listContainer);
    
    const array2 = array1.map(element => {
      const listItem = document.createElement('li');
      listContainer.append(listItem);
      return typeof element;
    }
    )
})
}
window.onload = moveNext();