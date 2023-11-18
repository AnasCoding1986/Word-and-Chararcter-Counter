let textarea = document.getElementById("txt");


textarea.addEventListener("input", function () {
    let text = this.value;
    let charecter = text.length;
    document.getElementById("char").innerHTML = charecter;
    text = text.trim();

    let word = text.split(" ");
    let cleanlist = word.filter(function(elm){
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanlist.length;
    
})

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AnasCoding1986/Word-and-Chararcter-Counter.git
// git push -u origin main