function getParagraph1()
{
    
    var para = "";
    for(var i = 1; i < 7; i++)
    {
        para += document.getElementById("paral_input_box_" + i).value;
    }
    para += ". ";
    document.getElementById("showParagraph1").innerHTML = para;
}


function getParagraph2()
{
    
    var para = "";
    for(var i = 1; i < 7; i++)
    {
        para += document.getElementById("para2_input_box_" + i).value;
    }
    para += ". ";
    document.getElementById("showParagraph2").innerHTML = para;
}