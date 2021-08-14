class NoData {
    static render (parentElement) {
        const element = document.createElement('div');
        element.classList.add('errScr');
        
        const innerDiv = document.createElement('div');
        const heading = document.createElement('h1');
        heading.setAttribute('style', 'margi-bottom: 30px;');
        heading.innerHTML = 'City not found, try again!';

        element.innerHTML = `
        <div>
            <h1 style="marginBottom: 30px">City not found, try again!</h1>
        </div>
        `;
        parentElement.appendChild(element);
    }
}
export default NoData;


{/* <div class="errScr hide">
        <div>
            <h1 style="marginBottom: 30px">City not found, try again!</h1>
            <input type="text" class="searchInput" placeholder="Search a City" name="" id=""/> 
        </div> */}