<?php

function champ_obligatoire(string $key,string $data,array &$errors,string $message="Ce champ est obligatoire"){
    if(empty($data)){
        $errors[$key]=$message;
    }
}