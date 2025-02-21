//appel
const container = document.getElementById('container-task')
const note=document.getElementById('note')
const form=document.getElementById('form')
const text = document.getElementById('textarea')
const timeon = document.getElementById('timeon')
const timeof = document.getElementById('timeof')
const date = document.getElementById('date')
const textValue = textarea.value.trim()
const dateValue = date.value.trim()
const timeonValue = timeon.value.trim()
const timeofValue = timeof.value.trim()
var time = 1000

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

btnTache.disabled=true;

container.appendChild(declenche)
container.appendChild(task)
container.appendChild(notes)
declenche.appendChild(btnColonne)
declenche.appendChild(btnTache)
container.appendChild(corb)
task.appendChild(corbeille)
pres.appendChild(ecrit1)
pres.appendChild(ecrit2)
pres.appendChild(button)
task.appendChild(pres)

//Evenements

//Corbeille
corb.addEventListener('click',()=>corbeille.classList.toggle('free'))

window.addEventListener('click', e => e.target != corb ? corbeille.classList.remove('free') : false )

//affiche ou cache les buttons
button.addEventListener('click',()=>declenche.classList.toggle('ouvre'))

let nbr=1
//Evenement création de colonne
btnColonne.addEventListener('click',()=>{
    //alert('ok')
    pres.classList.add('repli')
    button.classList.add('ouvrant')
    task.appendChild(button)
    
    CreateColonne()
    nbr++
    btnTache.disabled=false;

})
//Evenement ouverture du formulaire et création de Tache
btnTache.addEventListener('click',()=>{
    // alert('ok')
    notes.classList.toggle('tache')
    note.classList.toggle('porte')
    
     TaskMaker()      
 })
//Fermeture du formulaire
const sup =document.querySelector('.sup')
sup.onclick = function(){
        notes.classList.remove('tache')
        note.classList.remove('porte')
        // alert('ok') 
} 
Timeover()

//functions 
var i=0
function CreateColonne(){   
    if (nbr<=5) {
        var colonne = document.createElement('div')
        const titre = document.createElement('p')
        const centre = document.createElement('div')
        const supCol = document.createElement('span')
        
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
            
            //Sauvegarde du titre
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

                corbeille.append(titre)
                });                                     
            }
    //     function reflesh(){
    //     colonnes.forEach((nbr,i)=>{
    //         nbr.firstChild.innerHTML='colonne'+(i+1)
    //     })
    // }
    // async function getRandomUser() {
    //     const res = await fetch('http://localhost:8001/');
    //     const data = await res.json();
    
    //     const user = data.results[0];
    
    //     const newUser = {
    //         name: `${user.name.first} ${user.name.last}`,
    //         money: Math.floor(Math.random() * 1000000)
    //     }
    //     addData(newUser);
        
    }          
}
var containt = document.createElement('div')
//function create task
function TaskMaker(){
    
    notes.appendChild(note)
    const larges = document.querySelectorAll('.large')

    form.addEventListener('submit',function(e){
        e.preventDefault()
        
        if (Validate()) {
            const centres = document.querySelectorAll(".centre")       
                
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
            // setInterval(() => {
            //     write.addEventListener('mouseover',function(){
            //         write.innerHTML= `${larges[1].value}`    
            //     })
            // }, time);
        
               // window.addEventListener('mouseover', e => e.target == write ? write.innerHTML= `${larges[1].value}` : false )
            write.addEventListener('click',function(){

                //const remove = document.createElement('i')
                //remove.innerHTML='&#x1F5D1'
                notes.classList.toggle('tache')
                note.classList.toggle('porte')
                //const neWrite = document.createElement('textarea')
                write.value = `${larges[0].value}`
                //neWrite.setAttribute=('cols','30')
                //write.innerHTML=''
                //write.appendChild(neWrite)
                //write.appendChild(remove)
                write.focus();
        
                write.addEventListener('blur',function(){
                    write.innerHTML = `${larges[0].value}`
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
                }
            };

            containt.appendChild(write)
            containt.appendChild(del)
            containt.appendChild(spanb)                       

            centres[0].appendChild(containt) 
        }  
    })  
}  
// charge tache sur la colonne
// fetch("fichier.json").then(res=>res.json()).then(data=>{
//     TaskMaker(data)
// console.log(data) 
//})

    //Validation
function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = 'form-control success'; 
}
//Afficher les messages d'erreur
function showError(element,message) {
    const formControl = element.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function TextLength(textarea, min, max) {//Tester la longueur de la valeur  d'un input
    if(textarea.value.length < min){
        showError(textarea, `Le texte doit comporter plus de ${min} lettres !`)
    }else if(textarea.value.length > max){
        showError(textarea, `Le texte doit comporter plus de ${max} lettres !`);
    }else{
        showSuccess(textarea);
    }
}
//Function validation
const Validate = ()=>{
    cpt = 0
    if (textValue === '') {
        showError(textarea, 'Veuillez saisir un text')
        cpt++
    }else{
        showSuccess(textarea)
    }
    if (dateValue === '') {
        showError(date, 'Veuillez introduire une date')
        cpt++
    }else{
        showSuccess(date)
    } 
    if (timeonValue === '') {
        showError(timeon, `Veuillez définir l'heure de debut`)
        cpt++
    }else{
        showSuccess(timeon)
    }
    if (timeofValue === '') {
        showError(timeof, `Veuillez définir l'heure de fin`)
        cpt++
    }else{
        showSuccess(timeof)
    } 
    //Compare les horaires
    if (timeon.value >= timeof.value) {
        showError(timeof, 'Time do not match!');
        cpt++
    } 
    if (cpt==0) {
        return true
    }else{
        return false
    }
}

//UPDATE CONTDOWNTIME
function Timeover(){
const currentTime =moment();
const TimeOn =moment.duration(timeonValue, 'milliseconds');
const TimeOf =moment.duration(timeofValue, 'milliseconds');
const Time = moment(dateValue+" "+TimeOn,'YYYY-MM-DD HH:mm')

     const newDate = dateValue
    const StartTime = Time - currentTime;
    const EndTime = TimeOf - TimeOn
    
    setTimeout(()=>{
       containt.style.background='green'      
    }, StartTime)

    setTimeout(()=>{
        containt.style.background='red'
     }, EndTime)
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