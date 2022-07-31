<?php
require_once "conexion/conexion.php";

class mensajes_hilos extends conexion
{
    private $table = "mensajes";
    private $mesajesId = "";
    private $texto_mensaje ="";
    private $id_hilo ="";
    private $id_usuario ="";

    //obtenemos los mensajes de un hilo a traves de su id
    public function obtenerMensajes($id)
    {
        $query = "SELECT texto_mensaje FROM mensajes join hilos on mensajes.id_usuario = hilos.id_temas  where hilos.id = '$id'";
        return parent::obtenerDatos($query);
    }
}
?>