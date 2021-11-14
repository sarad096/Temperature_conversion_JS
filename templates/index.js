convertfunction = () => {
    let Name = document.getElementById("name").value
    console.log(Name)
    const cls = document.getElementById("celsius").value
    if (document.getElementById("flexRadioDefault2").checked && Name!="" && cls!="") {
        
        let fhr = (cls * 9) / 5 + 32
        alert(`Dear ${Name} the required temperature in Fahrenheit is ${fhr}`)
    }
    else if (document.getElementById("flexRadioDefault1").checked && Name!="" && cls!=""){
        
        let klv = parseFloat(cls) + 273
        alert(`Dear ${Name} the required temperature in Kelvin is ${klv}`)
    }
    else if (cls!=""){
        let Nameerr = "Please Enter Your Valid Name!"
        console.log(Nameerr)
        alert(Nameerr)
    }
    else if (Name!=""){
        let clserr = "Please Enter Valid Celsius Temperature!"
        console.log(clserr)
        alert(clserr)
    }
    else{
        let err = "We didnot understand what you meant!"
        alert(err)
    }
}



