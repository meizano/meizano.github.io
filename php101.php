<?php echo 'Hello World'; ?>

<?php
$a = 1; // $a as integer
$a = 'text'; // $a as string
$a = array('a', 'b', 'c'); // $a as array
?>

<?php
  echo $a;
echo '<br/>';
    echo $a[0];
echo '<br/>';
    for($i = 0; $i < 3; $i++){
        echo $a[$i];
        echo $a[$i];
    }
echo '<br/>';
foreach($a as $indeks => $nilai)
    echo $indeks+1 . ". ". $nilai . "<br/>";

$kata1 = 'Aku';
$kata2 = 'Kamu';
echo $kata1 . " dan " . $kata2;

?>
