export class Other {
    render() {
        const about = document.getElementById("content");
        about.innerHTML = `
        <div class="other">
            <ul>

                <li><b>Media</b>
                <ol class="ic" ><a href="https://www.facebook.com/nkhang1604" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;Nguyễn Võ Nguyên Khang</a></ol>
                <ol class="ic" ><a href="https://www.instagram.com/nkhangg_06/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;Nguyễn Võ Nguyên Khang</a></ol>
                <ol class="ic" ><a href="https://www.tiktok.com/@nkhangdeveloper1604" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>&nbsp;&nbsp;Khang Dev</a></ol>
                </li>

                <li><b>Client</b>
                    <ol>None</ol>
                </li>

                <li><b>Certificate</b>
                    <ol>None</ol>
                </li>
                
            </ul>
        </div>
        `;
    }
}