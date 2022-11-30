let input = document.querySelector('.inputtext');
let addBtn = document.querySelector('.addlist');
let tasks = document.querySelector('.tasks');


//add btn disabled
input.addEventListener('keyup', ()=> {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else{
        addBtn.classList.remove('active') 
    }
})
console.log(addBtn)
//add task
addBtn.addEventListener('click', ()=>{
    if(input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add( 'item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="items-btn"> 
        <i class="fa-solid fa-pencil"></i>
        <i class="fa-solid fa-xmark"></i> </div> 
         `
        tasks.appendChild(newItem);
        input.value ='';
    }else{
        alert("enter a new task");
    }

})
//delete item from list
tasks.addEventListener('click', (e)=>{
    if(e.target.classlist.contains('fa-solid fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})  

//mark item complete
 tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-solid fa-pencil')
    );
{
    e.target.parentElement.parentElement.classList.toggle('completed');
}
 })
