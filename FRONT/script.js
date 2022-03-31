//appel
const container = document.getElementById('container-task')
const note=document.getElementById('note')
const form=document.getElementById('form')
const text = document.getElementById('textarea')

//couleurs pour les colonnes
var color=["#E5C8FF","#A69E3B","#FDEACE","#6EE6D7","#A1818A","#dce73c","#1d1f01","#9327b4","#f06524","#f024f0"]

//Création des menus
const btnColonne = document.createElement('input')
const btnTache = document.createElement('input')
const declenche = document.createElement('div')
const pres = document.createElement('div')
const ecrit1 = document.createElement('h1')
const ecrit2 = document.createElement('h2')
const corbeille = document.createElement('div')
const corb = document.createElement('span')
const button = document.createElement('button')
const task = document.createElement('div')
const notes = document.createElement('div')

// 
declenche.setAttribute('id','declenche')
declenche.classList="declenche"
button.innerHTML='+'
button.classList='ajout'
corbeille.className='corbeille'
pres.className='ecrite'
ecrit1.innerHTML='Bienvenue!'
ecrit2.innerHTML='Veuillez appuyer sur ce button pour démarrer'
corb.className=('corb')
corb.innerHTML='&#x1F5D1'
btnColonne.setAttribute('type','button')
btnColonne.setAttribute('value','+ colonne')

btnTache.setAttribute('value','+ note')
btnTache.setAttribute('type','button')

notes.classList.add('note-container')

container.appendChild(declenche)
container.appendChild(task)
container.appendChild(notes)
declenche.appendChild(btnColonne)
declenche.appendChild(btnTache)
container.appendChild(corb)
task.appendChild(corbeille)
pres.appendChild(ecrit1)
pres.appendChild(ecrit2)
task.appendChild(pres)
pres.appendChild(button)

//Evenements

//Corbeille
corb.addEventListener('click',()=>corbeille.classList.toggle('free'))

window.addEventListener('click', e => e.target != corb ? corbeille.classList.remove('free') : false )

//affiche ou cache les buttons
button.addEventListener('click',()=>declenche.classList.toggle('ouvre'))

//Evenement création de colonne
btnColonne.addEventListener('click',()=>{
   // console.log(formControl)
   pres.classList.add('repli')
   button.classList.add('ouvrant')
   task.appendChild(button)
    CreateColonne()
    
     //creation task
    btnTache.addEventListener('click',()=>{
       // alert('ok')
       notes.classList.toggle('tache')
       note.classList.toggle('porte')

       const sup =document.querySelector('.sup')
       sup.onclick = function(){
           notes.classList.remove('tache')
           note.classList.remove('porte')
           // alert('ok') 
       } 
        TaskMaker()      
    })
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
        // const logo = document.createElement('img')
        
        titre.setAttribute('type','text')
        titre.innerHTML='colonne'+nbr
        titre.classList='titre'
        colonne.style.background=color[i]
        i++
        colonne.setAttribute('class','colonne')
        task.setAttribute('id','task')
        // logo.setAttribute('src','../logo.png')
        
        centre.classList='centre'
        supCol.classList='supCol'
        supCol.innerHTML='x'
    
        
        // colonne.appendChild(logo)
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
            })
        })
        //Suppresson colonne
        const colonnes = document.querySelectorAll('.colonne')            
            if (colonnes.length!=1) {
                //création événement de l'icone
                supCol.addEventListener('click', function(){
                    this.parentElement.remove();

                // const restor = document.createElement('i')
                // restor.innerHTML=`&#128257`
              
                // corbeille.append(restor)
                corbeille.append(titre)
                                         
                });       
            }
             
        }
    //     function reflesh(){
    //     colonnes.forEach((nbr,i)=>{
    //         nbr.firstChild.innerHTML='colonne'+(i+1)
    //     })
    // }
          
} 
      
//function create task
function TaskMaker(){
    
notes.appendChild(note)
    const larges = document.querySelectorAll('.large')
    // var textarea = document.querySelectorAll('#textarea')
    form.addEventListener('submit',function(e){
        e.preventDefault()
        
        //appel evenements
        checkRequired([textarea, date, timeon, timeof]);
        
        //     //
        //     checkLength(username, 3, 15);
        //     checkLength(password, 6, 25);
        //     checkEmail(email);
        //     checkPasswordMatch(password,password2);
              


        const centres = document.querySelectorAll(".centre")       
            
            var containt = document.createElement('div')
            const spana = document.createElement('span')
            const spanb = document.createElement('span')
            const write = document.createElement('p')
            const del = document.createElement('i')
                        
            containt.classList.add('containt')
            spana.innerHTML='&#xab'
            spana.classList=('spana')
            write.className='write'
            spanb.innerHTML='&#187'
            del.innerHTML='&#x1F5D1'
            spanb.classList=('spanb')
            write.innerHTML=''
            write.innerHTML= `${larges[0].value}`
            
            containt.appendChild(spana)
            containt.appendChild(write)
            containt.appendChild(del)
            containt.appendChild(spanb)               
             
            containt.appendChild(spana)
            centres[0].appendChild(containt) 
            
            //Deplacement des taches
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

            write.addEventListener('click',function(){
                
                const remove = document.createElement('i')
                remove.innerHTML='&#x1F5D1'
                    const neWrite = document.createElement('textarea')
                    neWrite.value = write.innerHTML
                    neWrite.setAttribute=('cols','30')
                    write.innerHTML=''
                    write.appendChild(neWrite)
                    write.appendChild(remove)
                    neWrite.focus();
        
                    neWrite.addEventListener('blur',function(){
                        write.innerHTML = neWrite.value
                        // build()
                    })
                })
            //suppression des taches
            del.onclick = function(){
                this.parentElement.remove()
                const restor = document.createElement('i')
                restor.innerHTML=`&#128257`
              
                corbeille.append(write)
                corbeille.append(restor)
                // console.log(containt)
                restor.onclick = function(){
                    restor.innerHTML=''
                    containt.appendChild(write)
                    centres[0].appendChild(containt)
                    // centres[0].appendChild(containt)
                    // this.parentElement.previousSibling.querySelector('.centre').appendChild(this.parentElement)
                }
            };
                
                containt.appendChild(write)
                containt.appendChild(del)
                containt.appendChild(spanb)               
             
                    
                centres[0].appendChild(containt) 

                    
    //     charge tache sur la colonne
    //     fetch("fichier.json").then(res=>res.json()).then(data=>{
    //         affiche(data)
    //    // console.log(data) 
    //     })      
    //}   
       // } 
    })  
}  
    //Validation
function showSuccess() {
    // const formControl = input.parentElement;
    const formControl = form.querySelectorAll('.form-control')
    // console.log(formControl)
    formControl.className = 'form-control success'; 
}
function showError(message) {//Afficher les messages d'erreur
    const formControl = document.querySelectorAll('.form-control')
    formControl.className = 'form-control error';
    const small = form.querySelector('small');
    small.innerText = message;
    console.log(formControl)
}

function getFieldName(input) {//Retour le nom de chaque input en se basant sur son id
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Tester si les champs ne sont pas vides
function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input,`${getFieldName(input)} is required`);

        }else{
            showSuccess();
        }
    });
}
// function checkLength(input, min, max) {//Tester la longueur de la valeur  d'un input
//     if(input.value.length < min){
//         showError(input, `${getFieldName(input)} must be at least ${min} characters!`)
//     }else if(input.value.length > max){
//         showError(input, `${getFieldName(input)} must be less than ${max} characters !`);
//     }else{
//         showSuccess(input);
//     }
// }

function checkDateMatch(input1, input2) {
    if (input2.value <= input1.value) {
        showError(input2, 'time do not match!');
    }
}


// const centres = document.querySelectorAll(".centre")       
// // console.log(colonnes)
// for (let nbr = 0; nbr < centres.length; nbr++) {
    
//     function affiche(tab){
    
//         tab.forEach(correspond => {
//             const{tache,date,debut,fin}=correspond
//             var containt = document.createElement('div')
            
            
//             // alert('ok')
//             containt.classList.add('containt')
            
//             const spana = document.createElement('span')
//             const spanb = document.createElement('span')
//             const write = document.createElement('p')
            
//             spana.innerHTML='&#xab'
//             spana.classList=('spana')
//             write.className='write'
//             spanb.innerHTML='&#187'
//             spanb.classList=('spanb')
//             write.innerHTML= `${tache},${date},${debut},${fin}`
            
            
//             containt.appendChild(spana)
//             containt.appendChild(write)
//             containt.appendChild(spanb)
                    
//             centres[0].appendChild(containt)   
            
//             //Deplacer les taches
//             spana.addEventListener('click',function(){
//                 // console.log(centres)
//                 this.closest('.colonne').previousSibling.querySelector('.centre').appendChild(this.parentElement)
//             })
            
//             spanb.addEventListener('click',function(){
//                 this.closest('.colonne').nextSibling.querySelector('.centre').appendChild(this.parentElement)
//             })
//                 // Autre methode
//             // spana.addEventListener('click',function(){
//             //     this.parentElement.remove()
//             //     centres[0].append(containt)
//             //     // console.log(containt)                 
//             // })
//             write.addEventListener('click',function(){
//                 alert('ok')
//                 const remove = document.createElement('i')
//                 remove.innerHTML='&#x1F5D1'
//                     const neWrite = document.createElement('textarea')
//                     neWrite.value = write.innerHTML
//                     neWrite.setAttribute=('cols','30')
//                     write.innerHTML=''
//                     write.appendChild(neWrite)
//                     neWrite.focus();
        
//                     neWrite.addEventListener('blur',function(){
//                         write.innerHTML = neWrite.value
//                         // build()
//                     })

//                     containt.appendChild(neWrite)
//                     containt.appendChild(remove)
//                     // build()
//                     // titre.style.color='black'
//                     // titre.innerHTML=`<textarea>colonne ${nbr}</textarea>`
                
//             });
//             // write.addEventListener('mouseenter',()=>{
//             //     const remove = document.createElement('i')
//             //     remove.innerHTML='&#x1F5D1'
//             //     containt.appendChild(remove)
//             // })
//         });            
//     }
//     // charge tache sur la colonne
//     fetch("fichier.json").then(res=>res.json()).then(data=>{
//         affiche(data)
//    // console.log(data) 
//     })      
// }   
// window.onload = menu;


// s'il s'agit d'un fichier js
// const stringJson =JSON.stringify(json) 
// stringJson: convertir un objet js en chaine de caracteres
// const parsedString = JSON.parse  console.log(JSON)
// parse: convertir une chaine de caractere en objet js