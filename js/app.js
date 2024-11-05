'use strict';

//Je récupère mes éléments HTML
const elements = {
    allTasks: document.querySelector('#all-tasks ul'),
    form: document.querySelector('#task-form form'),
    deleteBtn: document.querySelector('#delete-task-btn'),
    deleteAllBtn: document.querySelector('#delete-all-btn')
};

//J'indique mes priorités et leur valeur
const priorityHigh = 1;
const priorityNormal = 2;
const priorityLow = 3;

let myTasks = [
    {
        title: 'Savoir faire une todo list en js natif',
        priority: priorityHigh,
        isDone: false
    },
    {
        title: 'Préparer les cadeaux de Noël',
        priority: priorityNormal,
        isDone: false
    },
    {
        title: 'Finir Hollow Knight à 112%',
        priority: priorityLow,
        isDone: false
    }
];


//La fonction qui va me permettre de gérer les tâches
function displayTasks() {
    
    //Je vide les tâches précédentes du ul
    elements.allTasks.innerHTML = '';
    
    //Je créé les tâches de manière dynamique avec une BOUCLE
    //car je veux que ce qui va être déclaré se REPETE POUR CHAQUE tâche
    for(let myTask of myTasks) { //for of soit forEach
        
         //Je créé les éléments qui vont me servir pour cette tâche
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox'; //J'assigne un type à mon input
        //const icon = e.appendChild('<i class="fa-solid fa-pen" aria-hidden="false"></i>');
    
        input.addEventListener('change', (e) => { //change permet de changer l'état d'un élément
            myTask.isDone = input.checked; //checked est la valeur qui correspond à l'état coché de checkbox
        });
        
        //Je créé un noeud de texte pour l'élément label
        //ce dernier aura la valeur de l'élément labelName
        const labelName = document.createTextNode(myTask.title);
        
        //Puis, toujours dans ma boucle for of, je gère les priorité avec un switch
        switch(myTask.priority) {
            case priorityHigh:
                label.classList.add('high'); //J'ajoute une classe pour chaque priorité (cela va être utile pour CSS)
                break;
            case priorityNormal:
                label.classList.add('normal');
                break;
            case priorityLow:
                label.classList.add('low');
                break;
            default:
                label.classList.add('none');
                break;
        }
        
        //Puis j'attache tous les éléments ensemble
        label.append(input, labelName); //Je met l'input et le nom des tâches dans le label
        li.append(label); //Je met le label dans l'élément li
        elements.allTasks.append(li);
        //Et enfin je met mon élément li dans l'élément qui contient l'id all-tasks
        //en allant le chercher dans l'objet elements et en sélectionnant allTasks
    }
}

//J'affiche la liste au chargement de la page en appelant ma fonction
displayTasks();

elements.form.addEventListener('submit', (e) => {
    
    //J'empêche le rechargement de la page
    e.preventDefault();
    
    //Je récupère les données de mon formulaire
    const formData = new FormData(elements.form);
    
    //Puis je créé une nouvelle tâche
    const newTask = {
        title: formData.get('task_name'), //Je récupère la donnée name (task_title) de l'input se trouvant dans le form
        priority: Number(formData.get('choose_priority')), //J'utilise l'attribut Number pour bien récupérer un nombre et non une string
        isDone: false //Par défaut, la tâche n'est pas finie
    };
    
    //J'ajoute cette nouvelle tâche à mon tableau
    myTasks.push(newTask);
    
    //Puis je met tout à jour en appelant ma fonction
    displayTasks();
});

/*
//Je vide le texte présent dans l'input
function clearInputField() {
    elements.form.reset();
        }
clearInputField();
function emptyInput() {
        elements.formInput.value = '';
}

emptyInput();
   
   let formInput = document.querySelector('#task-name');
    
    for(let formInputs of formInput) {
        formInputs.value = '';
    }
*/

//La fonction qui va me permettre de supprimer uniquement les tâches terminées
elements.deleteBtn.addEventListener('click', () => {
    
    //On supprime toutes les tâches qui ont la propriété isDone en true
    //Si la tâche n'est pas complétée, on récupère un nouveau tableau uniquement avec les tâches non complétées
    //On met pas prevent default car le bouton "Supprimer les tâches" a l'attribut 'click' et non 'submit' car le btn ne fait pas parti d'un formulaire
    myTasks = myTasks.filter(myTask => !myTask.isDone);
    
    //Je met à jour l'affichage en appelant ma fonction
    displayTasks();
});

//La fonction qui va me permettre de supprimer toutes les tâches
elements.deleteAllBtn.addEventListener('click', () => {
    
    //Je retourne mon tableau myTasks avec une longueur (length) égale à zéro
    myTasks.length = 0;

    //Puis je met tout à jour
    displayTasks();
});
