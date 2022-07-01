<?php
//echo json_encode($_POST);

if($_POST['subir'] == 'accion'){
  // creará un nuevo registro en la base de datos
  require_once('bd.php');
  
// Validar las entradas
$nombre = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$empresa = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$telefono = filter_var($_POST['messagetext'], FILTER_SANITIZE_STRING);

try {
  $stmt = $conn->prepare("INSERT INTO comentarios (nombre, email, comentario) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $nombre, $empresa, $telefono);
  $stmt->execute();
  if($stmt->affected_rows == 1) {
    $respuesta = array(
    'respuesta' => 'correcto',
    'datos' => array(
    'nombre' => $nombre,
    'email' => $empresa,
    'comentario' => $telefono,
    'id_insertado' => $stmt->insert_id
    )
    );
    }
    $stmt->close();
    $conn->close();
} catch(Exception $e) {
    $respuesta = array(
    'error' => $e->getMessage()
    );
    }

  echo json_encode($respuesta);
}
         