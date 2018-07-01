var d = new Date();
var m = new Date();
var y = new Date();
if (d.getFullYear() === 2018) {
    if (m.getMonth() === 6) {
        if (y.getDate() >= 14) {
            this.document.getElementById("date").style.backgroundImage = "url('assets/images/now.png')";
        }
    } else if (m.getMonth() > 6) {
        this.document.getElementById("date").style.backgroundImage = "url('assets/images/now.png')";
    }
} else if (d.getFullYear() > 2018) {
    this.document.getElementById("date").style.backgroundImage = "url('assets/images/now.png')";
}