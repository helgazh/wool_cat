  ;(function(){
    "use strict";

    function showOrHide(forHer, herCategory) {
        forHer = document.getElementById(forHer);
        category = document.getElementById(cat);
        if (forHer.checked) herCategory.style.display = "block";
        else herCategory.style.display = "none";
      }
    
    // function openForm() {
        
    //     document.getElementById("myForm").style.display = "block";
    //   }
      
    //   function closeForm() {
    //     document.getElementById("myForm").style.display = "none";
    //   }

})();