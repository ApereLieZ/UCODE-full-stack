let stones = document.querySelectorAll("div");
console.log(stones);

for(let i = 0; i < stones.length; i++){
    stones[i].onmousedown = function (event) { // (1) отследить нажатие

        // (2) подготовить к перемещению:
        // разместить поверх остального содержимого и в абсолютных координатах
        stones[i].style.position = 'absolute';
        stones[i].style.zIndex = 1000;
        stones[i].ondragstart = function() {
            return false;
          };
        // и установим абсолютно спозиционированный мяч под курсор
      
        moveAt(event.pageX, event.pageY);
      
        // передвинуть мяч под координаты курсора
        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
            stones[i].style.left = pageX - stones[i].offsetWidth / 2 + 'px';
            stones[i].style.top = pageY - stones[i].offsetHeight / 2 + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);
      
        // (4) положить мяч, удалить более ненужные обработчики событий
        stones[i].onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          stones[i].onmouseup = null;
        };
      
      };
}

