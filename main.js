// let pages = 1;
// const accessKey = "KKK1qoOcwoxi50geaAVdRjyKf_sOp2KDyx8KRzzK4BM";
// const button = document.querySelector("button");
// const input = document.querySelector('#image-type');
// const container = document.createElement('div');

// document.body.appendChild(container);

// button.addEventListener('click', getImages);

// async function getImages() {
//     console.log('click');
//     pages++;
//     let imagesArr = [];

//     const url = `https://api.unsplash.com/search/photos?page=${pages}&query=${input.value}&client_id=${accessKey}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         console.log(data);

//         data.results.forEach((e) => {
//             imagesArr.push({ des: e.alt_description, image: e.urls.full });
//         });
//         const renderArr = imagesArr.map(
//           (e, index) =>
//             `<div class="images" key=${index}>
//             <img src=${e.image} alt="" />
//             <p>${e.des}</p>
//           </div>`
//         );
//         console.log("imagesArr: ", imagesArr);
//         console.log(renderArr);
//         container.innerHTML += renderArr.join('');
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }



const accessKey = "KKK1qoOcwoxi50geaAVdRjyKf_sOp2KDyx8KRzzK4BM";
const searchInput = document.getElementById('image-type');
const imagesContainer = document.getElementsByClassName('images');
const searchBtn = document.getElementsByClassName('search_btn');
const showMoreBtn = document.getElementById('show-more-btn');
let inputData = '';
let page = 1;


async function searchImages(){
  inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  results.length = 9;

  if (page === 1){
    console.log(imagesContainer);
  imagesContainer[0].innerHTML = "";
  console.log('here')}
  page++;
  if (page > 1) {showMoreBtn.style.display = "block"}


  results.map(result => {
    const image = `<div class="card">
              <img src="${result.urls.small}" alt="${result.alt_description}">
              <p>${result.alt_description}</p>
            </div>`;

            imagesContainer[0].innerHTML += image;
  })
}
function searchBtnfunc(){
  page=1;
  searchImages();

}
searchBtn[0].addEventListener('click', searchBtnfunc);
function showMoreBtnfunc(){
  searchImages();
}
showMoreBtn.addEventListener('click',showMoreBtnfunc);
