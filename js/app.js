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
        const icon = e.appendChild('<i class="fa-solid fa-pen" aria-hidden="false"></i>');
    
        input.addEventListener('change', (e) => { //change permet de changer l'état d'un élément
            myTask.isDone = input.checked; //checked est la valeur qui correspond à l'état coché de checkbox
        });
        
        
    }
}

elements.allTasks.addEventListener('click', (e) => {
    e.preventDefault();
});


//La fonction qui va me permettre de supprimer uniquement les tâches terminées
elements.deleteBtn.addEventListener('click', (e) => {
    
    //J'empêche le navigateur de se recharger
    e.preventDefault();
    
});


//La fonction qui va me permettre de supprimer toutes les tâches
elements.deleteAllBtn.addEventListener('click', (e) => {
    
    //J'empêche le navigateur de se recharger
    e.preventDefault();
    
    myTasks.pop();
});
