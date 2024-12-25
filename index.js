let boxes = document.getElementById("boxes");
// Api links
const popu_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// Fetching popular movies (getting data from the api)
async function get_popu_api(popu_api) {
    try {
        const response1 = await fetch(popu_api);
        if (!response1.ok) {
            throw new Error(`${response1.status}`);
        }
        var data1 = await response1.json();
        show1(data1.results);
    }
    catch (error) {
        boxes.innerText = "Error while fetching data. " + error.message;
    }
}

async function get_sear_api(movie_name) {
    try {
        const sear_api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movie_name}`;
        const response2 = await fetch(sear_api);
        if (!response2.ok) {
            throw new Error(`${response2.status}`)
        }
        var data2 = await response2.json();
        show1(data2.results);
    } catch (error) {
        boxes.innerText = "Error while fetching data. " + error.message;
    }
}
// Putting data of popular movies from that api on our webpage
function show1(data1) {
    boxes.innerHTML = "";
    data1.forEach((element) => {
        let box = document.createElement('div');
        box.className = "box";
        let image = "https://image.tmdb.org/t/p/original" + element.poster_path;
        box.innerHTML = `<img src=${image} alt="Image of the Movie " 
            width="300px">
                <div class="details">
                    <p style="color:red;">${element.original_title + " " + element.release_date.slice(0, 4)}</p>
                    <div class="property">
                        <div><p style="color:blue;">Adult:</p>${element.adult}</div>
                        <div><p style="color:blue;">Rating:</p>${element.vote_average}</div>
                    </div>
                </div>
                <p class="description">${element.overview}</p>`;
        boxes.appendChild(box);
    });
}
// Calling Api
get_popu_api(popu_api);