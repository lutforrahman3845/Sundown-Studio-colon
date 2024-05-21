const taskCatagory = document.querySelector('.task-icon');
const catagory = document.querySelector('#task-left');
const catagoryMenuIcon = document.querySelector('#catagory-menuicon');
const inputTask = document.querySelector('#input-task');
const taskAdd = document.querySelector('#btn-add');
const listContainer = document.querySelector('#list-container');
const taskOption = document.querySelector('#task-option');
const body = document.body;

let listClickDiv = null ; //store task-optionDiv


//click on catagoris change thier backgroundColor
const catagoryDiv = document.querySelectorAll('.catagoris'); 
    catagoryDiv.forEach(function(catagoryClick){
        catagoryClick.addEventListener('click', function(){
            catagoryDiv.forEach(function (cata){
                cata.classList.remove('catagory-click');
            });
            catagoryClick.classList.add('catagory-click');
        });
    });

//Add date innerHTML
const addDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[addDate.getDay()];
const month = addDate.toLocaleString('default',{month:'long'});
const putInsideDate = [`${dayOfWeek}, ${month} ${addDate.getDate()}`]
document.getElementById('date').innerHTML = putInsideDate;


//show task-left catagory-menubar
function showCatagory(){
    catagory.style.display='block';
}
//hide task-left catagory-menubar
function hideCatagory (){
    catagory.style.display= 'none';
}
taskCatagory.addEventListener('click', function(){
    taskCatagory.classList.remove('ri-menu-line');
    taskCatagory.classList.add('ri-sun-line');

    showCatagory();
});
catagoryMenuIcon.addEventListener('click',function(){
    taskCatagory.classList.remove('ri-sun-line');
    taskCatagory.classList.add('ri-menu-line');

    hideCatagory();
});



// The button will be disabled when the input is empty
function checkInput (){
    if(inputTask.value !== ''){
        taskAdd.style.cursor = 'default';
        taskAdd.style.color  = '#2564CF';
    }else{
        taskAdd.style.cursor='no-drop';
        taskAdd.style.color  = '#c5c5c5';
    }
}

inputTask.addEventListener('input', checkInput);
checkInput();

// input tasks add in unoder list
document.addEventListener('DOMContentLoaded', function(){
    //click task add button
    taskAdd.addEventListener('click', function(){
        const taskItem = inputTask.value;
        //when the input is not empty li tag creat into ul

        if(taskItem.trim() !== ''){
            const li = createItemTask(taskItem, false);
            listContainer.appendChild(li);
    
           //clear input
           inputTask.value ='';
        }else{  
            checkInput();  //input is empty then button cursor no-drop
        }
    
    });
    
    function createItemTask (taskItem, compeleted){
        //creat li , i and span tag
        const li = document.createElement('li');
        const icon1 = document.createElement('i');
        const span = document.createElement('span');
        const icon2 = document.createElement('i');

//show task-optionDiv click in li
        li.addEventListener('contextmenu', function(e){
            e.preventDefault();

            if(listClickDiv){
                listClickDiv.remove();  //if task-optionDiv  exists then remov it
            }

            listClickDiv = document.createElement('div'); // creat new task-optiondiv
            listClickDiv.classList.add('task-option');
            listClickDiv.innerHTML = `
            <div id="options">
            <div id="options-div">
                <i class="ri-sun-line task-optionIcon"></i>
                <span>Remove from My Day</span>
            </div>
            <div id="options-div">
                <i class="ri-star-line task-optionIcon"></i>
                <span>Mark as important</span>
            </div>
            <div id="options-div">
                <i class="ri-checkbox-circle-line task-optionIcon"></i>
                <span>Mark as complete</span>
            </div id="options-div">
            <hr>
            <div id="options-div">
                <i class="ri-inbox-unarchive-line task-optionIcon"></i>
                <span>Due today</span>
            </div>
            <div id="options-div">
                <i class="ri-inbox-archive-line task-optionIcon"></i>
                <span>Due tomorrow</span>
            </div>
            <hr>
            <div id="options-div">
                <i class="ri-menu-add-line task-optionIcon"></i>
                <span>Creat new list from this task</span>
            </div>
            <div id="options-div">
                <i class="ri-menu-add-line task-optionIcon"></i>
                <span>Move task to...</span>
                <i class="ri-arrow-drop-right-line task-optionIconLeft"></i>
            </div>
            <div id="options-div">
                <i class="ri-file-copy-line task-optionIcon"></i>
                <span>Copy to task...</span>
                <i class="ri-arrow-drop-right-line task-optionIconLeft"></i>
            </div>
            <hr>
            <div id="options-div" class="deleteList">
                <i class="ri-delete-bin-5-line task-optionIcon task-delete"></i>
                <span id="delete-span">Delete task</span>
            </div>
        </div>
            `
            listClickDiv.style.top = e.clientY +'px';
            listClickDiv.style.left = e.clientX + 'px';
            body.appendChild(listClickDiv);
            
            listClickDiv.querySelector('.deleteList').addEventListener('click', function(){
                listContainer.removeChild(li);       
            })

        });
        window.addEventListener('click', function(){
            if(listClickDiv){
                body.removeChild(listClickDiv);
            }
        });


        //left icon into list
        icon1.classList.add('list-icon1');
              if(compeleted){
                icon1.classList.add('ri-checkbox-circle-line');
              }else{
                icon1.classList.add('ri-checkbox-blank-circle-line');
              }
        icon1.addEventListener('click', function(){
            toggleCompelet(li, icon1);
        });
        li.appendChild(icon1);

        //task name put into span 
        span.textContent = taskItem
        li.appendChild(span);
         
         //right icon into list
         icon2.classList.add('list-icon2');
         if(compeleted){
           icon2.classList.add('ri-star-fill');
         }else{
           icon2.classList.add('ri-star-line');
         }
        icon2.addEventListener('click', function(){
           toggleCompelet1(li, icon2);
        });
    
        li.appendChild(icon2);
    
        return li ; // Return the newly created task item.
    }
     function toggleCompelet(li, icon1){
        if (icon1.classList.contains('ri-checkbox-blank-circle-line')){
            icon1.classList.remove('ri-checkbox-blank-circle-line');
            icon1.classList.add('ri-checkbox-circle-line');
        }else{
            icon1.classList.remove('ri-checkbox-circle-line');
            icon1.classList.add('ri-checkbox-blank-circle-line');
        }
     }
     function toggleCompelet1(li, icon2){
        if (icon2.classList.contains('ri-star-line')){
            icon2.classList.remove('ri-star-line');
            icon2.classList.add('ri-star-fill');
        }else{
            icon2.classList.remove('ri-star-fill');
            icon2.classList.add('ri-star-line');
        }
     }
});