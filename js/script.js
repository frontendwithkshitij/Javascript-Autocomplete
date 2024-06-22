const data = {
    "countries": [
        {
            "name": "Afghanistan",
            "capital": "Kabul",
            "region": "Asia",
            "population": 38928346,
            "languages": ["Pashto", "Dari"]
        },
        {
            "name": "Brazil",
            "capital": "Brasília",
            "region": "Americas",
            "population": 212559417,
            "languages": ["Portuguese"]
        },
        {
            "name": "Canada",
            "capital": "Ottawa",
            "region": "Americas",
            "population": 37742154,
            "languages": ["English", "French"]
        },
        {
            "name": "Denmark",
            "capital": "Copenhagen",
            "region": "Europe",
            "population": 5818553,
            "languages": ["Danish"]
        },
        {
            "name": "Egypt",
            "capital": "Cairo",
            "region": "Africa",
            "population": 102334404,
            "languages": ["Arabic"]
        },
        {
            "name": "France",
            "capital": "Paris",
            "region": "Europe",
            "population": 65273511,
            "languages": ["French"]
        },
        {
            "name": "India",
            "capital": "New Delhi",
            "region": "Asia",
            "population": 1380004385,
            "languages": ["Hindi", "English"]
        },
        {
            "name": "Japan",
            "capital": "Tokyo",
            "region": "Asia",
            "population": 126476461,
            "languages": ["Japanese"]
        },
        {
            "name": "Nigeria",
            "capital": "Abuja",
            "region": "Africa",
            "population": 206139589,
            "languages": ["English"]
        },
        {
            "name": "United States",
            "capital": "Washington, D.C.",
            "region": "Americas",
            "population": 331002651,
            "languages": ["English"]
        },
        {
            "name": "Australia",
            "capital": "Canberra",
            "region": "Oceania",
            "population": 25499884,
            "languages": ["English"]
        },
        {
            "name": "Germany",
            "capital": "Berlin",
            "region": "Europe",
            "population": 83783942,
            "languages": ["German"]
        },
        {
            "name": "Italy",
            "capital": "Rome",
            "region": "Europe",
            "population": 60244639,
            "languages": ["Italian"]
        },
        {
            "name": "Mexico",
            "capital": "Mexico City",
            "region": "Americas",
            "population": 128932753,
            "languages": ["Spanish"]
        },
        {
            "name": "Russia",
            "capital": "Moscow",
            "region": "Europe/Asia",
            "population": 145934462,
            "languages": ["Russian"]
        },
        {
            "name": "South Africa",
            "capital": "Pretoria",
            "region": "Africa",
            "population": 59308690,
            "languages": ["Zulu", "Xhosa", "Afrikaans", "English"]
        },
        {
            "name": "Spain",
            "capital": "Madrid",
            "region": "Europe",
            "population": 46754778,
            "languages": ["Spanish"]
        },
        {
            "name": "Sweden",
            "capital": "Stockholm",
            "region": "Europe",
            "population": 10099265,
            "languages": ["Swedish"]
        },
        {
            "name": "Switzerland",
            "capital": "Bern",
            "region": "Europe",
            "population": 8654622,
            "languages": ["German", "French", "Italian"]
        },
        {
            "name": "United Kingdom",
            "capital": "London",
            "region": "Europe",
            "population": 67886011,
            "languages": ["English"]
        },
        {
            "name": "Argentina",
            "capital": "Buenos Aires",
            "region": "Americas",
            "population": 45195774,
            "languages": ["Spanish"]
        },
        {
            "name": "China",
            "capital": "Beijing",
            "region": "Asia",
            "population": 1439323776,
            "languages": ["Mandarin"]
        },
        {
            "name": "Indonesia",
            "capital": "Jakarta",
            "region": "Asia",
            "population": 273523615,
            "languages": ["Indonesian"]
        },
        {
            "name": "Pakistan",
            "capital": "Islamabad",
            "region": "Asia",
            "population": 220892340,
            "languages": ["Urdu", "English"]
        },
        {
            "name": "Bangladesh",
            "capital": "Dhaka",
            "region": "Asia",
            "population": 164689383,
            "languages": ["Bengali"]
        },
        {
            "name": "Turkey",
            "capital": "Ankara",
            "region": "Europe/Asia",
            "population": 84339067,
            "languages": ["Turkish"]
        },
        {
            "name": "Vietnam",
            "capital": "Hanoi",
            "region": "Asia",
            "population": 97338579,
            "languages": ["Vietnamese"]
        },
        {
            "name": "Philippines",
            "capital": "Manila",
            "region": "Asia",
            "population": 109581078,
            "languages": ["Filipino", "English"]
        },
        {
            "name": "Iran",
            "capital": "Tehran",
            "region": "Asia",
            "population": 83992949,
            "languages": ["Persian"]
        },
        {
            "name": "Thailand",
            "capital": "Bangkok",
            "region": "Asia",
            "population": 69799978,
            "languages": ["Thai"]
        },
        {
            "name": "Myanmar",
            "capital": "Naypyidaw",
            "region": "Asia",
            "population": 54409800,
            "languages": ["Burmese"]
        },
        {
            "name": "South Korea",
            "capital": "Seoul",
            "region": "Asia",
            "population": 51269185,
            "languages": ["Korean"]
        },
        {
            "name": "Colombia",
            "capital": "Bogotá",
            "region": "Americas",
            "population": 50882891,
            "languages": ["Spanish"]
        },
        {
            "name": "Kenya",
            "capital": "Nairobi",
            "region": "Africa",
            "population": 53771296,
            "languages": ["Swahili", "English"]
        },
        {
            "name": "Ukraine",
            "capital": "Kyiv",
            "region": "Europe",
            "population": 44134693,
            "languages": ["Ukrainian"]
        },
        {
            "name": "Poland",
            "capital": "Warsaw",
            "region": "Europe",
            "population": 38386000,
            "languages": ["Polish"]
        },
        {
            "name": "Canada",
            "capital": "Ottawa",
            "region": "Americas",
            "population": 37742154,
            "languages": ["English", "French"]
        },
        {
            "name": "Morocco",
            "capital": "Rabat",
            "region": "Africa",
            "population": 36910560,
            "languages": ["Arabic", "Berber"]
        }
    ]
};





let autoCompleteInput = document.getElementById('autoComplete');
let results = document.getElementById('results');
let output = ''
autoCompleteInput.addEventListener('input',openAutoComplete);
autoCompleteInput.addEventListener('focus', openAutoComplete);

document.addEventListener('click',(e)=>{
    if(!results.contains(e.target) && e.target !== autoCompleteInput){
    results.style.display = 'none'
    }
})


function openAutoComplete(e){
    if(autoCompleteInput.value  == ''){
        results.style.display = 'none'
    } else{
        results.style.display = "block"
        let dataNew = filterData(data.countries,autoCompleteInput.value)
        loadData(dataNew)
    }

}


 function loadData(items) {
          results.innerHTML = '' 
          output = ''
          if(items.length === 0){
            output = '<h3 class="nodata">No Data</h3>'
          }else{
            items.forEach((element)=>{
            output+=`<li onclick="valFun('${element.name}')">${element.name}</li>`
          })
          }
          const ul = document.createElement('ul')
          ul.innerHTML = output;
          results.appendChild(ul)
}

function valFun(value){
    if(value){
        autoCompleteInput.value = value;
        results.style.display = 'none'
    }
}

function filterData(data, query) {
    return data.filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()));
}


