function clicked(cal)                                   ///calling function wirth arg
{
    console.log(cal)
    document.getElementById("input").value+=cal         ///inputing into calc screen
}

function clearDisplay()                                 
{
    document.getElementById("input").value=""           /// clearing the calc screen
}
function equalclicked()
{
    var values=document.getElementById("input").value    /// asigning the values in screen to values  
    var res=eval(values)                                ///operating the values
    document.getElementById("input").value=res              /// printing the values
}