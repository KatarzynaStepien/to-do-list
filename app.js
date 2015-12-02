/**
 * Created by Kasia on 2015-12-02.
 */
document.addEventListener('DOMContentLoaded', function() {
    var input = document.querySelector("#toDoInput");
    var addButton = document.querySelector("#buttonAdd");
    var listWithTasks = document.querySelector("#listWithTasks");
    var ListWithDoneTasks = document.querySelector("#listWithFinishedTasks");
    var removeButton = document.querySelector("#buttonClear");



    addButton.addEventListener('click', function(event) {

        if(input.value.length > 3){

            var newListElement = document.createElement("li");
            var newButton = document.createElement("button");

            newButton.innerHTML = "Zrobiono";
            newListElement.innerHTML = input.value;

            newButton.addEventListener('click', function (){

                if(newListElement.parentElement === listWithTasks){
                    newButton.innerHTML = "Cofnij";
                    ListWithDoneTasks.appendChild(newListElement);

                }else if (newListElement.parentElement === ListWithDoneTasks){
                    newButton.innerHTML = "Zrobiono";
                    listWithTasks.appendChild(newListElement);

                }
            });

            newListElement.appendChild(newButton);
            listWithTasks.appendChild(newListElement);

            input.value = "";
        }

    });

    removeButton.addEventListener('click', function(event){
        ListWithDoneTasks.innerHTML = "";


    });

});