function my_spaceship(sb){
    var x = 0;
    var y = 0;
    var d = "up";
    for(var i = 0; i < sb.length; i++){
     if(sb[i] == 'R'){
         if(d == "up"){
             d = "right";
         }
         else if(d == "left"){
             d = "up";
         }
         else if(d == "down"){
            d = "left";
        }
        else if(d == "right"){
            d = "down";
        }
     }
     if(sb[i] == 'L'){
        if(d == "up"){
            d = "left";
        }
        else if(d == "left"){
            d = "down";
        }
        else if(d == "down"){
           d = "right";
       }
       else if(d == "right"){
           d = "up";
       }
    }
    if(sb[i] == 'A'){
        if(d == "up"){
            y--;
        }
        else if(d == "left"){
            x--;
        }
        else if(d == "down"){
           y++;
       }
       else if(d == "right"){
           x++;
       }
    }
    }

    var res = "{x: " + x + ", y: " + y + ", direction: '" + d + "'}";

    return(res)
}