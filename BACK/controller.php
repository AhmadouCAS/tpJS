<?php 
require_once(PATH_SRC."models".DIRECTORY_SEPARATOR."user.models.php");
// Traitement des Requetes POST
if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(isset($_REQUEST['action'])){
        
        if ($_REQUEST['action']=="register") {
           $textarea = $_POST['textarea'];
            $date = $_POST['date'];
            $timeon = $_POST['timeon'];
            $timeof = $_POST['timeof'];
            
            //var_dump($tempname);die;
            CreateTache ($textarea,$date,$timeon,$timeof); 
                    
        }
    } 
}
// Traitement des Requetes GET
if($_SERVER["REQUEST_METHOD"]=="GET"){
    if(isset($_REQUEST['action'])){
        if($_REQUEST['action']=="register"){
            require_once(PATH_VIEWS."securite/register.html.php");            
        }
    }else {
        require_once(PATH_VIEWS."securite".DIRECTORY_SEPARATOR."connexion.html.php");
        }
}
//les fonctions:

//Inscription
function CreateTache (string $textarea ,int $date,int $timeon,int $timeof){

    $errors=[];

    champ_obligatoire('prenom',$textarea,$errors,"text obligatoire");
    champ_obligatoire('date',$date,$errors,"date obligatoire");
    champ_obligatoire('timeon',$timeon,$errors,"time obligatoire");
    champ_obligatoire('timeof',$timeof,$errors,"time obligatoire");
        
}
// pour la déconnexion
function logout(){
    session_destroy();
    header("location:".WEB_ROOT);
    exit();
}