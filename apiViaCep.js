const cep = document.querySelector("#cep")


cep.addEventListener("blur", (e)=>{
    let search =  cep.value.replace('-','')

    const options = {
        method : 'GET',
        mode : 'cors',
        cache : 'default'
    }

    
    fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then( r => r.json().then( data => {
        for (const key in data) {
            if (document.querySelector('#'+key)) {
                document.querySelector('#'+key).value = data[key]
            }
        }
    } ) )
    .catch(err => alert('não foi possivel encotrar o cep'));

})


