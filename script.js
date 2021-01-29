let button = document.createElement('button');
let btnText = document.createTextNode('Add Square');
let container = document.createElement('div');
button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(container);

   
let id = '1';
button.addEventListener('click', function(){
    let div = document.createElement('div');
    container.appendChild(div);
    div.style.backgroundColor = 'black';
    div.style.width = '250px';
    div.style.height = '250px';
    div.style.cssFloat = 'left';
    div.className = 'box';
    div.setAttribute('id', id);
    id++;
    
    div.addEventListener('mouseenter', function(){
        console.log(this.id);
        let divText = document.createTextNode(this.id);
        div.appendChild(divText);  
  
    })

    div.addEventListener('mouseleave', function(){
        div.innerText = ''; 

    });
    div.addEventListener('click', function() {
        let randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    })

    let color = [
        "purple",
        "blue",
        "green",
        "silver",
        "brown",
    ];
    
    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random()*color.length)];
        return randomColor;
        
    }

    div.addEventListener('dblclick', remove);
    function remove() {

        if (this.id %2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('The square is not there');
            }
        } else {
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('The square is not there');
            }
        }
    }
 });


