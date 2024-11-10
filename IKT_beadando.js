document.getElementById("szamitas").addEventListener("click", function() {
    let meret = document.querySelector('input[name="meret"]:checked');
    let suly = document.querySelector('input[name="suly"]:checked');
    let szallitas = document.querySelector('input[name="szallitas"]:checked');
    
    if (meret && suly && szallitas) {
        let ar = 0;

        if(meret.value === "kis"){
            ar += 250
        }else if(meret.value === "kozepes"){
            ar += 500
        }else{
            ar += 750
        }

        if(suly.value === "konnyu"){
            ar += 250
        }else if(suly.value === "sulyosabb"){
            ar += 500
        }else{
            ar += 750
        }
        
        if (szallitas.value === "gyors") ar += 750;

        document.getElementById("eredmeny").innerText = "A kiszámított ár: " + ar + " Ft";
    } else {
        document.getElementById("eredmeny").innerText = "Kérjük, válassza ki az összes opciót!";
    }
});
