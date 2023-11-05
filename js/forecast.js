const overla = document.getElementById("overlay");

const KEY = '96b947a45d33d7dc1c49af3203966408';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getData = async (city)=>{

    const query = `?q=${city}&units=metric&appid=${KEY}`;

    overla.classList.remove('d-none');

    data = await fetch(BASE_URL + query).then(data => data.json()).catch(error=> console.error(error));
   
    data && overla.classList.add('d-none');

    return data 
}

