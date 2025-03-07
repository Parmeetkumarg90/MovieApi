// new movie api code
    let boxes = document.getElementById("boxes");
    // Api links
    // Fetching popular movies (getting data from the api)
    async function get_popu_api() {
        const popu_api = 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular?first=10';
        const options1 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'dce7427ef0msh665df1d69ed36a7p12a111jsn51a30b79b3fb',
                'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
            }
        };
        try {
            const response1 = await fetch(popu_api, options1);
            // if (!response1.ok) {
            //     throw new Error(`${response1.status}`);
            // }
            var data1 = await response1.json();
            // console.log(data1)
            // console.log(data1.data);
            show1(data1.data);
        }
        catch (error) {
            boxes.innerText = "Error while fetching data. " + error.message;
        }
    }
    // Putting data of popular movies from that api on our webpage
    function show1(data1) {
        let copy = data1.tv.edges;
        data1 = data1.movies.edges;
        boxes.innerHTML = "";
        data1.forEach((element) => {
            let box = document.createElement('div');
            box.className = "box";
            box.innerHTML = `<img src="${element.node.primaryImage.url}" alt="Image of the Movie " 
            width="300px">
                <div class="details">
                    <p style="color:red;">${element.node.titleText.text + " " + element.node.releaseDate.year}</p>
                    <div class="property">
                        <div style=" font-size:1.6vmax;"><p style="color:blue;">Type:</p>${element.node.titleType.text}</div>
                        <div style=" font-size:1.6vmax;"><p style="color:blue;">Rating:</p>${element.node.ratingsSummary.aggregateRating}</div>
                    </div>
                </div>
                <p class="description">${JSON.stringify(element.node.plot.plotText.plainText)}</p>`;
            boxes.appendChild(box);
        });
        copy.forEach((element) => {
            let box = document.createElement('div');
            box.className = "box";
            box.innerHTML = `<img src="${element.node.primaryImage.url}" alt="Image of the Movie " 
            width="300px">
                <div class="details">
                    <p style="color:red;">${element.node.titleText.text + " " + element.node.releaseDate.year}</p>
                    <div class="property">
                        <div style=" font-size:1.6vmax;"><p style="color:blue;">Type:</p>${element.node.titleType.text}</div>
                        <div style=" font-size:1.6vmax;"><p style="color:blue;">Rating:</p>${element.node.ratingsSummary.aggregateRating}</div>
                    </div>
                </div>
                <p class="description">${JSON.stringify(element.node.plot.plotText.plainText)}</p>`;
            boxes.appendChild(box);
        });
    }
    // Fetching movies by user (getting data from the api)    
    let movie_name = document.querySelector("#movie_name");
    movie_name.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
            get_sear_api();
        }
    });
    async function get_sear_api() {
        const sear_api = `https://online-movie-database.p.rapidapi.com/v2/search?searchTerm=${movie_name.value}&first=20`;
        const options2 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'dce7427ef0msh665df1d69ed36a7p12a111jsn51a30b79b3fb',
                'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
            }
        };

        try {
            const response2 = await fetch(sear_api, options2);
            var data2 = await response2.json();
            //console.log(data2.data.mainSearch.edges);
            show2(data2.data.mainSearch.edges);
        } catch (error) {
            boxes.value = "Error while fetching data. " + error.message + "\nTry Refreshing Page";
        }
    }
    // Putting data of popular movies from that api on our webpage
    function show2(data1) {
        boxes.innerHTML = "";
        data1.forEach((element) => {
            let box = document.createElement('div');
            box.className = "box";
            box.innerHTML = `<img src="${element.node.entity.primaryImage.url}" alt="Image of the Movie " 
            width="300px">
                <div class="details">
                    <p style="color:red;">${element.node.entity.titleText.text + " " + element.node.entity.releaseDate.year}</p>
                    <div class="property">
                        <div style=" font-size:1.6vmax;"><p style="color:blue;">Type:</p>${element.node.entity.titleType.text}</div>                        
                        <div style=" font-size:1.6vmax;"><p style="color:blue;">Country:</p>${element.node.entity.releaseDate.country.id}</div>
                    </div>
                </div>`;
            boxes.appendChild(box);
        });
    }
    // Calling Api
    get_popu_api();

// old movie api code
// let boxes = document.getElementById("boxes");
// // Api links
// const popu_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// // Fetching popular movies (getting data from the api)
// async function get_popu_api(popu_api) {
//     try {
//         const response1 = await fetch(popu_api);
//         if (!response1.ok) {
//             throw new Error(`${response1.status}`);
//         }
//         var data1 = await response1.json();
//         show1(data1.results);
//     }
//     catch (error) {
//         boxes.innerText = "Error while fetching data. " + error.message;
//     }
// }

// async function get_sear_api(movie_name) {
//     try {
//         const sear_api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movie_name}`;
//         const response2 = await fetch(sear_api);
//         if (!response2.ok) {
//             throw new Error(`${response2.status}`)
//         }
//         var data2 = await response2.json();
//         show1(data2.results);
//     } catch (error) {
//         boxes.innerText = "Error while fetching data. " + error.message;
//     }
// }
// // Putting data of popular movies from that api on our webpage
// function show1(data1) {
//     boxes.innerHTML = "";
//     data1.forEach((element) => {
//         let box = document.createElement('div');
//         box.className = "box";
//         let image = "https://image.tmdb.org/t/p/original" + element.poster_path;
//         box.innerHTML = `<img src=${image} alt="Image of the Movie " 
//             width="300px">
//                 <div class="details">
//                     <p style="color:red;">${element.original_title + " " + element.release_date.slice(0, 4)}</p>
//                     <div class="property">
//                         <div><p style="color:blue;">Adult:</p>${element.adult}</div>
//                         <div><p style="color:blue;">Rating:</p>${element.vote_average}</div>
//                     </div>
//                 </div>
//                 <p class="description">${element.overview}</p>`;
//         boxes.appendChild(box);
//     });
// }
// // Calling Api
// get_popu_api(popu_api);
