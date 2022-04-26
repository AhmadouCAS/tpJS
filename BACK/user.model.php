<?php


function tache_data():array{
    $tache = array(
        "textarea" => $_POST['textarea'],
        "date" => $_POST['date'],
        "timeon" => $_POST['timeon'],
        "timeof" => $_POST['timeof'],       
    );
    return $tache;
}
