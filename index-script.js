const backToTopButton = document.getElementById('backToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
};
function scrollToTop() {
    const scrollToTop = window.setInterval(function() {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        clearInterval(scrollToTop);
      }
    }, 0.1);
};
function refreshPage() {
    location.reload();
};
    
function insertText(e) {
    var t=document.getElementById("search-input");
    if(null!=t)
    {
        var a=t.scrollTop,n=0,c=t.selectionStart||"0"==t.selectionStart?"ff":!!document.selection&&"ie";
        if("ie"==c)
        {
            t.focus();var l=document.selection.createRange();l.moveStart("character",-t.value.length),n=l.text.length
        }
        else"ff"==c&&(n=t.selectionStart);
        var r=t.value.substring(0,n),o=t.value.substring(n,t.value.length);t.value=r+e+o;var s=new Event("keyup");if(t.dispatchEvent(s),n+=e.length,"ie"==c)
        {
            t.focus();l=document.selection.createRange();l.moveStart("character",-t.value.length),l.moveStart("character",n),l.moveEnd("character",0),l.select()
        }
        else"ff"==c&&(t.selectionStart=n,t.selectionEnd=n,t.focus());t.scrollTop=a
    }
};

const workList = document.querySelector(".work-container");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

let scrollAmount = 0;

leftButton.addEventListener("click", () => {
    scrollAmount -= 6 * 270; // Adjust the width of a single book
    workList.scroll({
        left: scrollAmount,
        behavior: "smooth",
    });
});

rightButton.addEventListener("click", () => {
    scrollAmount += 6 * 270; // Adjust the width of a single book
    workList.scroll({
        left: scrollAmount,
        behavior: "smooth",
    });
});
