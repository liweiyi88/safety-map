<?php
/**
 * Created by PhpStorm.
 * User: Julian
 * Date: 10/11/14
 * Time: 5:43 PM
 */

class JsonConvertor
{



   public function __construct()
   {

   }



}



$filename = "dataset/weekend.csv";

if($filename != null)
{
    if (($handle = fopen($filename, "r")) !== FALSE)
    {
        fgetcsv($handle, 1000, ",");
        echo "var chartData = [";
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
        {
            $num = count($data);
            $name = $data[0];
            $population = $data[1];

            echo "{";
            echo "\"country\"".":\"".$name."\",";
            echo "\"visits\"".":\"".$population."\"";
            echo "},";

        }
        echo "];";

        fclose($handle);
    }
}






