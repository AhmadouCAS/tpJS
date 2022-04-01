<?php
if(isset($_REQUEST['controller']) ){
    if ($_REQUEST['controller']== "securite") {
    
        require_once(PATH_SRC."controllers".DIRECTORY_SEPARATOR."controllers.php");
    }
}else{
    require_once(PATH_SRC."controllers".DIRECTORY_SEPARATOR."controllers.php");
}