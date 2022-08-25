
// document.body.onload = addElement;
function addElement () {
  // create a new div element
//   

  
        // let menu = document.querySelector('.card');
        // let clonedMenu = menu.cloneNode(true);
        // clonedMenu.class = 'card';
        // document.body.appendChild(clonedMenu).insertBefore;
    const note=document.createElement('div');
    note.classList.add('note');
    const HTMLDATa=`<div style:"   padding-top: 20px;
    height: 400px  display: flex justify-content: center"><div class="card "  id="div1" style="width:19rem" >
    <div class="card-body   animate__bounceOut " id="div1">
      <button onclick="deleteElement()" type="button" id="deletenote" class="btn btn-primary  float-left" data-bs-toggle="button"  autocomplete="off">Delete Note</button>

      <textarea placeholder="add note" style="width=17rem"></textarea>
    </div>
    </div>
  </div>`;
//   note.id = "::div1";
// note.style.cssText = 'position:absolute;top:300px;left:300px;width:200px;height:200px;-moz-border-radius:100px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;display:none;';

  note.insertAdjacentHTML('afterbegin',HTMLDATa);
  document.body.appendChild(note);
}
function deleteElement(){
  const element = document.querySelector('#div1');
element.remove();
//element.removeEventListener("mousemove", myFunction);

}
var n=document.getElementsByClassName('card-text').length;
console.log(n);

var m=document.getElementsByClassName('card').length;
console.log(m);