
// ---: Prompts :---

let firstName = prompt("Enter Fist Name");
let lastName = prompt("Enter Last Name");
console.log("Welcome",firstName,lastName,"!")

/* 

      ---> Prompt displays a dialog box that asks user for some input.
 
      ---> prompt() : The prompt() method displays a dialog box that prompts the user for input.
           The prompt() method returns the input value if the user clicks "OK",otherwise it returns null.
 
*     ---> Syntax : prompt(text,defaultText);
 
!     ---> Notes :-
 
        -> A prompt box is used if you want the user to input a value.
        -> When a prompt box pops up,the user will have to click either "OK" or "Cancel" to proceed.
!       -> Do not overuse this method.It prevents the user from accessing other parts of the page until
!          the box is closed.

TODO  ---> Parameters :-
      
        -> +=============+===========================================+
           |  Parameter  | Description                               |
           +=============+===========================================+
           | text        | -> Optional.                              |
           |             | -> The text to display in the dialog box. |                                                        
           +-------------+-------------------------------------------+ 
           | defaultText | -> Optional.                              |
           |             | -> The default input text.                |
           +=============+===========================================+

TODO  ---> Return Value :-
      
        -> +=============+=========================================================+
           |  Parameter  | Description                                             |
           +=============+=========================================================+
           | A string    | -> If the user clicks "OK",the input value is returned. |
           |             |    Otherwise null is returned.                          |                                                        
           +=============+=========================================================+

        -> Demo :- +----------------------------------------------------+
                   | New Tab  X |                                       |
                   +----------------------------------------------------+                                                    
                   | <- ->    | google.com                     |     O :|
                   +--------------+=====================+---------------+                                                    
                   | About  Store |  This page says     | Gmail  Images |
                   |              |                     |               |
                   |              | Enter First Name    |               |
                   |              | +-----------------+ |               |
                   |              | |                 | |               |
                   |              | +-----------------+ |               |
                   |              |                     |               |
                   |              |   +----+ +--------+ |               |
                   |              |   | OK | | Cancel | |               |
                   |              |   +----+ +--------+ |               |
                   |              +=====================+               |
                   |                       Google                       |
                   |         +-------------------------------+          |
                   |         |                               |          |
                   |         +-------------------------------+          |
                   |                                                    |
                   |                                                    |
                   |                                                    |
                   +----------------------------------------------------+
        
*/