export class Project {
    render() {
        const about = document.getElementById("content");
        about.innerHTML = `
        <div class="project">
            <ul>

                <li><b>Student Management Program</b> 
                    <ol>&nbsp;&nbsp; - Use object-oriented programming</ol>
                    <ol>&nbsp;&nbsp;  - Using language: C++</ol>
                    <ol>Click to view project</ol>
                    <ol><button onclick="window.open('https://github.com/khang1604/QLI_HS.git')">Go!</button></ol>
                </li>  

                <li><b>Shorten links</b>
                    <ol>&nbsp;&nbsp;- Using language: Python</ol>
                    <ol>&nbsp;&nbsp;  - Library used: Tkinter </ol>
                    <ol>Click to view project</ol>
                    <ol><button onclick="window.open('https://github.com/khang1604/shorteners.git')">Go!</button></ol>
                </li>
                
            </ul>
        </div>
        `;
    }
}