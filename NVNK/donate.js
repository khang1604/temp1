export class Donate{
    render() {
        const about = document.getElementById("content");
        about.innerHTML = `
        <div class="donate">
            <div>

            <a href="https://theoceancleanup.com/" target="_blank">
            <p><img src="ocean.jpg"></p>
            <p >The Ocean Cleanup</p>
            <div class ="overlay"><i class="fa fa-eye" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.arborday.org/trees/" target="_blank" >
            <p><img src="tree.jpg"></p>
            <p>Arbor Day Foundation</p>
            <div class ="overlay"><i class="fa fa-eye" aria-hidden="true"></i></div>
            </a>
            
            </div>
        `;
    }
}