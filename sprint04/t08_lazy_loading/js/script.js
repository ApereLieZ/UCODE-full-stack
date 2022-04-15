document.addEventListener("DOMContentLoaded", function() {
    let lazy = document.querySelectorAll("img.lazy");    
    let timeout;
    let collection;

    let num = document.getElementById('num');
    let isCheck = true;
    let images = document.getElementsByTagName('img');
   
        
    function lazyload () {
        if(timeout)
            clearTimeout(timeout);
          
        timeout = setTimeout(function() {
            let scrollTop = window.pageYOffset;

            for(let i = 0; i < lazy.length; i++){
                if(lazy[i].offsetTop < (window.innerHeight + scrollTop)) {                
                    lazy[i].src = img.dataset.src;
                    lazy[i].classList.remove('lazy');
                    collection = document.getElementsByClassName('lazy');
                    num.innerHTML = '';
                    num.insertAdjacentHTML('beforeend', `${images.length - collection.length}`);
                    if (isCheck && collection.length === 0) {
                        isCheck = false;
                        let label = document.getElementsByTagName('label')[0];
                        label.classList.add('finish');
                        setTimeout(function() { label.style.display = 'none'; }, 2000);
                    }
                }
            }

            if(lazy.length == 0) { 
                document.removeEventListener("scroll", lazyload);
            }
        }, 250);
    }
    document.addEventListener("scroll", lazyload);
});