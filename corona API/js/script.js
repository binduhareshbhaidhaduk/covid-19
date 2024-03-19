const myHeaders = new Headers();
let corona = document.getElementById('coronaTable');

const fetchData = async () => {
    try {
        const response = await fetch(`https://data.covid19india.org/data.json`, {
            method: 'GET',
            mode: 'cors',
            headers: myHeaders
        });
        const data = await response.json();

        const statewiseData = data.statewise;
        statewiseData.forEach((state, index) => {
            if (!index == 0) { 
                corona.innerHTML += `<td>${state.state}</td>
            <td>${state.active}</td>
            <td>${state.lastupdatedtime}</td>
            <td>${state.confirmed}</td>
            <td>${state.deaths}</td>
            `;

            }
            console.log(state.state, state.confirmed);
        });
        console.log(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
};

fetchData();

