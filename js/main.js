const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

search.addEventListener('input', () => searchStates(search.value));

const searchStates = async searchText => {
    const res = await fetch('../data/state_capitals.json')
    const states = await res.json();
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        // console.log(state.name.match(regex));
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if (searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    };
    // console.log(matches);
    outputHtml(matches);     
}

const outputHtml = matches => {
    // if (matches.length > 0){
    //     const html = matches.map(match => 
    //         `<div class="card card-body mb-1"> 
    //         <h4> ${match.name} (${match.abbr}), <span class="text-primary">${match.capital}</span></h4>
    //         <small>Lat: ${match.lat}, Long: ${match.long}</small>
    //         </div>`
    //     ).join('');
    // }
    if (matches.length > 0){
        let html =  matches.reduce((prev, curr) => {
            prev += `<div class="card card-body mb-1"> 
                <h4> ${curr.name} (${curr.abbr}), <span class="text-primary">${curr.capital}</span></h4>
                <small>Lat: ${curr.lat}, Long: ${curr.long}</small>
                </div>`
            return prev;
        }, '');
        
        matchList.innerHTML = html;
    }
    // // console.log(html);
    // matchList.innerHTML = html;
        

}
    



    



