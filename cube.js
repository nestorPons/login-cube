let cube = {
    position: "front", 
    obj :   document.getElementById('cube'),
    front : document.getElementById('front'), 
    back :  document.getElementById('back'),
    left :  document.getElementById('left'),
    right : document.getElementById('right'),
    angX : 0,
    angY : 0,
    move : function (arg) {
        switch (arg) {
          case "right":
            this.angY = this.angY + 90;
            if(this.position == 'front') this.position = 'right'
            else
            if(this.position == 'right') this.position = 'back'
            else
            if(this.position == 'back') this.position = 'left'
            else
            if(this.position == 'left') this.position = 'front'
            break;
          case "left":
            this.angY = this.angY - 90;
            if(this.position == 'front') this.position = 'left'
            else
            if(this.position == 'left') this.position = 'back'
            else
            if(this.position == 'back') this.position = 'right'
            else
            if(this.position == 'right') this.position = 'front'
            break;
      }
      this.obj.style.transform = 'rotateX(' + this.angX + 'deg) rotateY(' + this.angY + 'deg)'; 
    }, 
    goTo : function(arg){
      switch (arg) {
        case "front":
            if(this.position == 'left') this.move('right')
            else
            if(this.position == 'right') this.move('left')
            else
            if(this.position == 'back') {
              this.move('left')
              this.move('left')
            }
          break; 
        case "left":
            if(this.position == 'front') this.move('right')
            else
            if(this.position == 'back') this.move('left')
            else
            if(this.position == 'right') {
              this.move('right')
              this.move('right')
            }
          break; 
        case "right":
            if(this.position == 'front') this.move('left')
            else
            if(this.position == 'back') this.move('right')
            else
            if(this.position == 'left') {
              this.move('left')
              this.move('left')
            }
          break; 
        case "back":
            if(this.position == 'right') this.move('right')
            else
            if(this.position == 'left') this.move('left')
            else
            if(this.position == 'front') {
              this.move('right')
              this.move('right')
            }
          break; 
      }
    }
}
for(let i = 0; i <= 3; i++){
for(let i = 0; i <= 3; i++){
  let btnGoToRight = document.getElementsByClassName('btnGoToRight')[i]; 
  let btnGoToLeft = document.getElementsByClassName('btnGoToLeft')[i];
  let btnGoToBack = document.getElementsByClassName('btnGoToBack')[i];
	btnGoToRight != undefined && btnGoToRight.addEventListener('click',function(){cube.move('right')}); 
	btnGoToLeft != undefined && btnGoToLeft.addEventListener('click',function(){cube.move('left')}); 
	btnGoToBack != undefined && btnGoToBack.addEventListener('click',function(){cube.move('left');cube.move('left')});
}
}
        