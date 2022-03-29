//appel
const container = document.getElementById('container-task')

//couleurs pour les colonnes
var color=["#E5C8FF","#A69E3B","#FDEACE","#6EE6D7","#A1818A"]

//Création des menus
const btnColonne = document.createElement('input')
const btnTache = document.createElement('input')
const declenche = document.createElement('div')
const corbeille = document.createElement('div')
const button = document.createElement('button')
const remove = document.createElement('img')
const task = document.createElement('div')
const notes = document.createElement('div')

declenche.setAttribute('id','declenche')
declenche.classList="declenche"
button.innerHTML='+'
button.classList='ajout'
btnColonne.setAttribute('type','button')
btnColonne.setAttribute('value','+ colonne')
remove.setAttribute('src','/images/sup.png')
btnTache.setAttribute('value','+ note')
btnTache.setAttribute('type','button')

notes.classList.add('note-container')

container.appendChild(declenche)
container.appendChild(task)
container.appendChild(notes)
declenche.appendChild(btnColonne)
declenche.appendChild(btnTache)
// corbeille.appendChild(remove)
// container.appendChild(corbeille)
container.appendChild(button)

//Evenement affiche ou cache les buttons
button.addEventListener('click',()=>declenche.classList.toggle('ouvre'))

//Evenement création de colonne
 btnColonne.addEventListener('click',()=>{
     CreateColonne()

    //creation task
    btnTache.addEventListener('click',()=>{
        // alert('ok')
        notes.classList.toggle('tache')
        TaskMaker()
        // envoie.addEventListener('click',affiche())
    })

    const centres = document.querySelectorAll(".centre")       
    // console.log(colonnes)
    for (let nbr = 0; nbr < centres.length; nbr++) {
        
        function affiche(tab){
        
            tab.forEach(correspond => {
                const{tache,date,debut,fin}=correspond
                var containt = document.createElement('div')
                
                // alert('ok')
                containt.classList.add('containt')
                const spana = document.createElement('span')
                const spanb = document.createElement('span')
                const write = document.createElement('p')
                
                spana.innerHTML='<<'
                spana.classList=('spana')
                spanb.innerHTML='>>'
                spanb.classList=('spanb')
                write.innerHTML= `${tache},${date},${debut},${fin}`
                
                containt.appendChild(spana)
                containt.appendChild(write)
                containt.appendChild(spanb)
                        
                centres[0].appendChild(containt)   
                
                //Deplacer les taches
                spana.addEventListener('click',function(){
                    // console.log(centres)
                    this.closest('.colonne').previousSibling.querySelector('.centre').appendChild(this.parentElement)
                })
                
                spanb.addEventListener('click',function(){
                    this.closest('.colonne').nextSibling.querySelector('.centre').appendChild(this.parentElement)
                })
                    // Autre methode
                // spana.addEventListener('click',function(){
                //     this.parentElement.remove()
                //     centres[0].append(containt)
                //     // console.log(containt)                 
                // })
            });            
        }
        // charge tache sur la colonne
        fetch("fichier.json").then(res=>res.json()).then(data=>{
            affiche(data)
       // console.log(data) 
        })      
    }   
 })

//functions 
var i=0
let nbr=0

function CreateColonne(){
    nbr++
   
    if (nbr<6) {
    var colonne = document.createElement('div')
        const titre = document.createElement('p')
        const centre = document.createElement('div')
        const supCol = document.createElement('span')
        // const edit = document.createElement('span')
        
        titre.setAttribute('type','text')
        titre.innerHTML='colonne'+nbr
        titre.classList='titre'
        colonne.style.background=color[i]
        i++
        colonne.setAttribute('class','colonne')
        task.setAttribute('id','task')
        centre.classList='centre'
        supCol.classList='supCol'
        supCol.innerHTML='x'
    
        
        task.appendChild(colonne) 
        colonne.appendChild(titre)
        colonne.appendChild(centre)
        colonne.appendChild(supCol)
    

        //Editer titre
        titre.addEventListener('click',function(){
            const newInput = document.createElement('textarea')
            newInput.value = titre.innerHTML
            newInput.setAttribute=('cols','30')
            titre.innerHTML=''
            titre.appendChild(newInput)
            newInput.focus();

            newInput.addEventListener('blur',function(){
                titre.innerHTML = newInput.value
                build()
            })
            // build()
            // titre.style.color='black'
            // titre.innerHTML=`<textarea>colonne ${nbr}</textarea>`
        })
        //Suppresson colonne
        const colonnes = document.querySelectorAll('.colonne')
        // console.log(colonnes) 
        // for (let i = 0; i < colonnes.length; i++) {            
            if (colonnes.length!=1) {
                //création événement de l'icone
                supCol.addEventListener('click', function(){
                    this.parentElement.remove(); //travail à faire                    
                });
            }
                }
    //     function reflesh(){
    //     colonnes.forEach((nbr,i)=>{
    //         nbr.firstChild.innerHTML='colonne'+(i+1)
    //     })
    // }
        
        
        // if (colonnes.length=1){
        //     supCol.addEventListener('click', function(){
        //         this.parentElement.remove(); //travail à faire
        //     });
        // }
          
} 
      



//function create task
function TaskMaker(){
    const note = document.createElement('div')
    const bar = document.createElement('div')
    const p =document.createElement('p')
    const sup = document.createElement('span')
    const dive = document.createElement('div')
    const form = document.createElement('form')
    const h = document.createElement('h3')
    const div1 = document.createElement('div')
    const label1 = document.createElement('label')
    const text = document.createElement('textarea')
    const div2 = document.createElement('div')
    const label2 = document.createElement('label')
    const input1 = document.createElement('input')
    const div3 = document.createElement('div')
    const label3 = document.createElement('label')
    const input2 = document.createElement('input')
    const div4 = document.createElement('div')
    const label4 = document.createElement('label')
    const input3 = document.createElement('input')
    const envoie = document.createElement('button')

    note.setAttribute('id','note')
    bar.classList='bar'
    p.innerHTML='NOUVELLE TACHE'
    sup.innerHTML='X'
    dive.classList='div-container'
    h.innerHTML='Remplir les informations de la nouvelle tache'
    label1.innerHTML='Tache'
    text.setAttribute('cols','30')
    text.setAttribute('rows','20')
    text.classList='large'
    label2.innerHTML='Date'
    input1.setAttribute('type','date')
    input1.classList='large'
    label3.innerHTML='Heure de Début'
    input2.setAttribute('type','time')
    input2.classList='large'
    label4.innerHTML='Heure de Fin'
    input3.setAttribute('type','time')
    input3.classList='large'
    envoie.classList='large'
    envoie.setAttribute('type','button')
    envoie.innerHTML='Envoyer'
    
    bar.appendChild(sup); bar.appendChild(p)
    div1.appendChild(label1); div1.appendChild(text)
    div2.appendChild(label2); div2.appendChild(input1)
    div3.appendChild(label3); div3.appendChild(input2)
    div4.appendChild(label4); div4.appendChild(input3)
    form.appendChild(div1); form.appendChild(div2)
    form.appendChild(div3); form.appendChild(div4)
    form.appendChild(envoie); dive.appendChild(h)
    note.appendChild(bar); dive.appendChild(form) 
    note.appendChild(dive);notes.appendChild(note)  
}


// window.onload = build



// edit.addEventListener('click', function(){ //création d'événement 
//     textarea.focus();//faire clignoter une barre sur le textarea
// });
// sup.addEventListener('click', function(){  //création événement de l'icone
//     let supprime = main.remove(); //travail à faire
//   });


// window.onload = menu;
// aller.addEventListener('click',function(){
//     allpDroit = document.getElementsByTagName('p');
//     for(let i=0; i<allpDroit.length;i++){
//        const par = allpDroit[i].parentElement;
//         if(allpDroit[i].style.background !=""){
//             var para = document.createElement('p');
//             para.innerHTML=allpDroit[i].innerText;
//             sec.appendChild(para);
//             par.removeChild(allpDroit[i]);
//         }
//     }   
// });

// s'il s'agit d'un fichier js
// const stringJson =JSON.stringify(json) 
// stringJson: convertir un objet js en chaine de caracteres
// const parsedString = JSON.parse  console.log(JSON)
// parse: convertir une chaine de caractere en objet js