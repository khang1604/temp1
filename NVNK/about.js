export class About {
    render() {
        const about = document.getElementById("content");
        about.innerHTML = `
        <div class="about">
            <ul>

                <li><b>Hello!</b> 
                    <ol>I am a university student with a passion for programming. In studying, I am a self-disciplined, self-taught person, always learning and improving new knowledge. At work, I always prioritize product quality first. I know how to listen to learn from others, constantly strive to improve myself, always looking for opportunities to grow.</ol>
                </li>

                <li><b>About me:</b>
                    <ol>&nbsp;&nbsp;My fullname: Nguyễn Võ Nguyên Khang</ol>
                    <ol>&nbsp;&nbsp;My forte language: C++, Python, html, css</ol>
                    <ol>&nbsp;&nbsp;My skill: Web Development, OOP</ol>
                    <ol>&nbsp;&nbsp;My address: Ho Chi Minh City - Viet Nam</ol>
                </li>    
                
            </ul>
        </div>
        `;
    }
}