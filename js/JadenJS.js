/* 
This is the starting code for when the person first visits the page.

This sets in the inital javascript functions
*/

  Menu1(); 

  var isTestOn = false;

  var value = document.getElementById("JadenDateSelecter").value;
    PickMenu(value);
    for(var i=1; i<=8; i++){
      document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
    }
    MenuTimeFunctions();

  for(var i=1; i<=7; i++){
    document.getElementById("JadenDate" + (i)).innerHTML= new Date(Date.now() + ((i-1) * 24 * 60 * 60 * 1000)).toDateString();
  }

    document.getElementById('JadenButton5').onclick = function(){
      document.getElementById('JadenPopUp14').style.display = 'none';
      document.getElementById("JadenDisplayBox10").style.display = 'none';
      document.getElementById("JadenLoginProfileBox").style.justifyContent = 'center';
      document.getElementById("JadenAccountPic").style.display = 'flex';
  };

    document.getElementById('JadenButton6').onclick = function(){
        alert("Account Created! (Not Actually, but Pretend It Was Made If You Are Testing This)");
        document.getElementById('JadenPopUp14').style.display = 'none';
  };


PopUpFunctionFor(9,13);
PopUpFunctionFor(10,14);

for(var i=1; i<=5; i++){
  MealButton(i);
}

for(var i=1; i<=8; i++){
  AllergyButton(i);
}

document.getElementById('JadenButton2').onclick = function(){
  if(document.getElementById("JadenAccountPic").style.display != 'flex'){
    alert("You Need To Log In In Order To Use This Feature");
    document.getElementById('JadenPopUp13').style.display = 'none';
    document.getElementById('JadenPopUp14').style.display = 'flex';
  }
  else{
    alert("Preferences Saved");
    document.getElementById('JadenPopUp13').style.display = 'none';

    if(document.getElementById('JadenDietPopUpContentButtonAllergic6').style.opacity == 1 &&  document.getElementById('JadenDietPopUpContentButtonAllergic8').style.opacity == 1){
      isTestOn=true;
      PickMenu(document.getElementById("JadenDateSelecter").value);
      for(var i=1; i<=8; i++){ document.getElementById('JadenDisplayBox'+ i).style.display='flex';}
      document.getElementById('JadenDisplayBox7').style.display='none';
      document.getElementById('JadenDisplayBox8').style.display='none';      
    }
    else{
      isTestOn=false;
      PickMenu(document.getElementById("JadenDateSelecter").value);
      for(var i=1; i<=8; i++){ document.getElementById('JadenDisplayBox'+ i).style.display='flex';}
    }

  }
}


document.getElementById('JadenButton3').onclick = function(){
  document.getElementById('JadenPopUp13').style.display = 'none';
    if(document.getElementById('JadenDietPopUpContentButtonAllergic6').style.opacity == 1 &&  document.getElementById('JadenDietPopUpContentButtonAllergic8').style.opacity == 1){
      isTestOn=true;
      PickMenu(document.getElementById("JadenDateSelecter").value);
      for(var i=1; i<=8; i++){ document.getElementById('JadenDisplayBox'+ i).style.display='flex';}
      document.getElementById('JadenDisplayBox7').style.display='none';
      document.getElementById('JadenDisplayBox8').style.display='none';      
    }
    else{
      isTestOn=false;
      PickMenu(document.getElementById("JadenDateSelecter").value);
      for(var i=1; i<=8; i++){ document.getElementById('JadenDisplayBox'+ i).style.display='flex';}
    }

}


  document.getElementById("JadenDateSelecter").onchange = function() {
  
  var value = document.getElementById("JadenDateSelecter").value;
    PickMenu(value);
    for(var i=1; i<=8; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){
          document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
        }
    }
    MenuTimeFunctions();
}

/* Functions are below here/End of the Initial Javascript Code Here */





/* These are the functions to allow the food to switch and pop up when the date is selected from the option bar*/
function DateSelecterChangeFunction() {
  
  var value = document.getElementById("JadenDateSelecter").value;
    PickMenu(value);
    for(var i=1; i<=8; i++){
      if((isTestOn == true && (i == 7 || i == 8))==false){
        document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
      }
      else{ document.getElementById('JadenDisplayBox' + i).style.display = 'none'}
    }
    MenuTimeFunctions();
}


/* This gives the javascript code to the "Pick Meal Time:" buttons, so they can swap the pictures of the food when a meal time is selected*/
function MenuTimeFunctions(){

      document.getElementById('JadenAll').onclick = function(){   
      PickMenu(document.getElementById("JadenDateSelecter").value);
      
      for(var i=1; i<=8; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){
          console.log('JadenDisplayBox' + i );
        document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
      }
    }

    }
    
    document.getElementById('JadenBreakfast').onclick = function(){   
      PickMenu(document.getElementById("JadenDateSelecter").value);

      for(var i=1; i<=8; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){
          document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
        }
      }

      for(var i=4; i<=8; i++){document.getElementById('JadenDisplayBox' + i).style.display = 'none';}
    }
    





    document.getElementById('JadenLunch').onclick = function(){   
      PickMenu(document.getElementById("JadenDateSelecter").value);
      for(var i=1; i<=8; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){
          document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
        }
      }

      var tempStorage = [];
      
      for(var i=4; i<=8; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){ 
          tempStorage.push(document.getElementById('JadenFoodPictureName' + i).innerHTML);
        }
      }

      for(var i=1; i<=tempStorage.length; i++){
        ChangeFoodToAnother(i, tempStorage[i-1]); 
     }
      for(var i=1+tempStorage.length; i<=8; i++){ document.getElementById('JadenDisplayBox' + i).style.display = 'none';}

    }





    document.getElementById('JadenDinner').onclick = function(){   
      PickMenu(document.getElementById("JadenDateSelecter").value);
      for(var i=1; i<=8; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){
          document.getElementById('JadenDisplayBox' + i).style.display = 'flex';
        }
      }
      var tempStorage = [];

      for(var i=4; i<=7; i++){
        if((isTestOn == true && (i == 7 || i == 8))==false){ 
          tempStorage.push(document.getElementById('JadenFoodPictureName' + i).innerHTML);
        }
      }

      for(var i=1; i<=tempStorage.length; i++){ ChangeFoodToAnother(i, tempStorage[i-1]); }
      for(var i=1+tempStorage.length; i<=8; i++){ document.getElementById('JadenDisplayBox' + i).style.display = 'none';}
    }
}



/* Picks one of the menus for the days based on a value that is given to it*/
  function PickMenu(value){
    if (value == 0){Menu1();}
    else if (value == 1){Menu2();}
    else if (value == 2){Menu3();}
    else if (value == 3){Menu4();}
    else if (value == 4){Menu5();}
    else if (value == 5){Menu6();}
    else if (value == 6){Menu7();}
  }


/* Menu1-7 are just placing the food in the boxes along with their popups to show */
  function Menu1(){
    ChangeFoodToAnother(1, "Waffle" );
    ChangeFoodToAnother(2, "Doughnut" );
    ChangeFoodToAnother(3, "Sausage & Gravy" );
    ChangeFoodToAnother(4, "Salad" );
    ChangeFoodToAnother(5, "Beef Stew" );
    ChangeFoodToAnother(6, "Burger");
    
    if(isTestOn==false){
      ChangeFoodToAnother(7, "French Fries" );
      ChangeFoodToAnother(8, "Onion Rings" );
    }

  }


  function Menu2(){
    ChangeFoodToAnother(1,"Waffle");
    ChangeFoodToAnother(2,"Eggs");
    ChangeFoodToAnother(3,"Tater Tots");
    ChangeFoodToAnother(4,"Salad");
    ChangeFoodToAnother(5,"Rigatoni");
    ChangeFoodToAnother(6,"Burger");
    if(isTestOn==false){
      ChangeFoodToAnother(7,"Potato Wedges");
      ChangeFoodToAnother(8,"Onion Rings");
    }
  }


  function Menu3(){
    ChangeFoodToAnother(1,"Waffle");
    ChangeFoodToAnother(2,"Doughnut");
    ChangeFoodToAnother(3,"Sausage & Gravy");
    ChangeFoodToAnother(4,"Salad");
    ChangeFoodToAnother(5,"Rigatoni");
    ChangeFoodToAnother(6,"Burger");
    if(isTestOn==false){
      ChangeFoodToAnother(7,"French Fries");
      ChangeFoodToAnother(8,"Potato Wedges");
    }
  }


   function Menu4(){
    ChangeFoodToAnother(1,"Waffle");
    ChangeFoodToAnother(2,"Doughnut");
    ChangeFoodToAnother(3,"Sausage & Gravy");
    ChangeFoodToAnother(4,"Salad");
    ChangeFoodToAnother(5,"Beef Stew");
    ChangeFoodToAnother(6,"Burger");
    if(isTestOn==false){
      ChangeFoodToAnother(7,"Potato Wedges");
      ChangeFoodToAnother(8,"Onion Rings");
    }
  }


   function Menu5(){
    ChangeFoodToAnother(1,"Waffle");
    ChangeFoodToAnother(2,"Eggs");
    ChangeFoodToAnother(3,"Tater Tots");
    ChangeFoodToAnother(4,"Salad") ;
    ChangeFoodToAnother(5,"Beef Stew");
    ChangeFoodToAnother(6,"Burger");
    if(isTestOn==false){
      ChangeFoodToAnother(7,"French Fries");
      ChangeFoodToAnother(8,"Onion Rings");
    }
  }

   function Menu6(){
    ChangeFoodToAnother(1,"Waffle");
    ChangeFoodToAnother(2,"Eggs");
    ChangeFoodToAnother(3,"Sausage & Gravy");
    ChangeFoodToAnother(4,"Salad");
    ChangeFoodToAnother(5,"Beef Stew");
    ChangeFoodToAnother(6,"Burger");
      if(isTestOn==false){
      ChangeFoodToAnother(7,"Potato Wedges");
      ChangeFoodToAnother(8,"Onion Rings");
    }
  }


   function Menu7(){
    ChangeFoodToAnother(1,"Waffle");
    ChangeFoodToAnother(2,"Doughnut");
    ChangeFoodToAnother(3,"Tater Tots");
    ChangeFoodToAnother(4,"Salad");
    ChangeFoodToAnother(5,"Beef Stew");
    ChangeFoodToAnother(6,"Burger");
    if(isTestOn==false){
      ChangeFoodToAnother(7,"French Fries");
      ChangeFoodToAnother(8,"Potato Wedges");
    }
  }




/* 
Changes one box with food in it to another box with food in it

This is used to give the illusion of the meals switching around when a person is picking a meal time or diffrent date
*/

  function ChangeFoodToAnother(DisplayNumber, FoodName){

    var tabNamesInOrder = ["Waffle", "Tater Tots", "Doughnut", "Sausage & Gravy", "Eggs", "Salad", "French Fries", "Onion Rings", "Beef Stew", "Burger", "Rigatoni", "Potato Wedges"];

    var PopUpNumber = tabNamesInOrder.indexOf(FoodName) + 1;
    
    document.getElementById("JadenDisplayBox" + DisplayNumber).style.backgroundImage = 'url(' + document.getElementById("JadenLeftContent" + PopUpNumber).src + ')';
    document.getElementById("JadenFoodPictureName" + DisplayNumber).innerHTML = tabNamesInOrder[PopUpNumber-1];

    PopUpFunctionFor(DisplayNumber, PopUpNumber);
  }


/* Links a popup to a food box*/
  function PopUpFunctionFor(DisplayNumber, PopUpNumber){
    DisplayPopUpFor(DisplayNumber, PopUpNumber);
    ExitProcedureFor(PopUpNumber);
  }


/* Shows a popup for a certain food box when it is clicked on*/
  function DisplayPopUpFor(DisplayNumber, PopUpNumber){
      document.getElementById("JadenDisplayBox" + DisplayNumber).onclick = function() {
        document.getElementById("JadenPopUp" + PopUpNumber).style.display = "flex";
      }
  }


/* This is the exit button and exit background functions for the pop up that is selected*/
  function ExitProcedureFor(PopUpNumber){
      window.onclick = function(event) {
        if (event.target == document.getElementById("JadenPopUp" + PopUpNumber)) { document.getElementById("JadenPopUp" + PopUpNumber).style.display = "none";}
      }
      document.getElementById("JadenExitButton" + PopUpNumber).onclick = function() { document.getElementById("JadenPopUp" + PopUpNumber).style.display = "none";}
  }


/* Used to toggle on and off the Allergy Buttons in the Dietary Preferences*/
  function AllergyButton(AllergicNumber){
    var target = document.getElementById("JadenDietPopUpContentButtonAllergic" + AllergicNumber);
     
     target.onclick = function() {
      if(target.style.opacity == 1){target.style.opacity = 0.5;}
      else{target.style.opacity = 1;}
    }
  }


/* Used to toggle on and off the Meal Preference Buttons in the Dietary Preferences*/
  function MealButton(MealNumber){
    var target = document.getElementById("JadenDietPopUpContentButtonMeals" + MealNumber);
     
     target.onclick = function() {
      if(target.style.opacity == 1){target.style.opacity = 0.5;}
      else{target.style.opacity = 1;}
    }
  }