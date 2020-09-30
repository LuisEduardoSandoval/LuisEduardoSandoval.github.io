


AFRAME.registerComponent('day-night',{
    schema:{
      position: {default: '0, 0, 0'}
    },
    init: function()
    {
      var data = this.data;
      var el = this.el;
      var boxel= document.querySelector('#box');
      let sound2 =document.querySelector('#ring');
      var clicks = 0;



      //var defaultPosition = el.getAttribute('lightPosition').data;

      boxel.addEventListener('click',function()
      {
        


        if (clicks%2 === 0)
        {
          el.setAttribute('environment',{lightPosition: '-10  -10 -10.2'});
          boxel.setAttribute('color', 'red');
          sound2.components.sound.playSound();
          clicks+=1;
          
        }
        else
        {
          el.setAttribute('environment',{lightPosition: '0  -1 0.2'});
          boxel.setAttribute('color', 'green');
          sound2.components.sound.playSound();
          clicks+=1;
        }

        
        console.log(el.getAttribute('environment','skyColor'));

      });
       //working
      //console.log(el.getAttribute('enviorment', 'lightPosition'));
      

    }
  });






  AFRAME.registerComponent('covidmode',{
    schema:{

      },
    init: function()
    {
      var data = this.data;
      var el = this.el;
      var CovidBoxel= document.querySelector('#CovidBox');
      var CovidText=document.querySelector('#covidText');
      var humanel = document.querySelector('#human');
      var humanel1 = document.querySelector('#human1');
      
      var humanel2 = document.querySelector('#humanSit');
      var humanel3 = document.querySelector('#humanSit1');
      var clicks=0;

      let sound =document.querySelector('#ring');
      
      CovidBoxel.addEventListener('click',function()
      {
          if(clicks%2 === 0)
          {
            CovidBoxel.setAttribute('color', 'green');
            humanel.setAttribute('visible', false);
            humanel1.setAttribute('visible', false);

            humanel2.setAttribute('visible', false);
            humanel3.setAttribute('visible', false);

            CovidText.setAttribute('value','look again to turn off covid mode');

            sound.components.sound.playSound();
            clicks+=1;

            
            
          }
          else
          {
            CovidBoxel.setAttribute('color', 'red');
            humanel.setAttribute('visible', true);
            humanel1.setAttribute('visible', true);


            humanel2.setAttribute('visible', true);
            humanel3.setAttribute('visible', true);
            CovidText.setAttribute('value','look at box for covid mode');

            sound.components.sound.playSound();
            clicks+=1;


          }
          console.log(clicks);



      });
       //working
      //console.log(el.getAttribute('enviorment', 'lightPosition'));
      

    }
  });










  AFRAME.registerComponent('lighting', {
    init: function () {
      var el = this.el;
      var presets = ['0 -10 0', '0 1 1', '0 2 2', '0 2 3', '0 2 4', '0 2 5', '0 2 6', '0 2 7', '0 3 8', '0 4 9', '0 5 10'];
      var preset = 0;



      document.querySelector('.previousPreset').addEventListener('click', function () {
        nextPreset(-1);
      });

      document.querySelector('.nextPreset').addEventListener('click', function () {
        nextPreset(1);
      });
      function nextPreset(dir) {
        if (preset === 0 && dir === -1) {
          preset =preset - 1;
        }
        else {
          preset = (preset + dir) % presets.length;
        }
        document.querySelector('h1 b').innerHTML = presets[preset];
        el.setAttribute('environment', {lightPosition: presets[preset]});
      };
    }
  });






  
  
