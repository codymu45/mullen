<?php

if (isset($_POST['contactSubmit'])) {
  $name = $_POST['inputName'];
  $email = $_POST['inputEmail'];
  $message = $_POST['inputMessage'];

  $mailTo = "mullen.cody@yahoo.com";
  $headers = "From: ".$email;
  $txt = "You have a new message from ".$name.".\n\n".$message;

  mail($mailTo, $headers, $txt);

}