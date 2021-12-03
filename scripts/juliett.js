const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  // toggle the eye slash icon
  
  this.classList.toggle("fa-eye-slash");
});

  $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
    
   

  });

  $('#btnLoadData').click(function() {
    console.log("clicked");

    //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

    let jsonURL = "demo.json";


    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.firstName);
            
            //loads first name into my first input box (in example #1)
            $("#noSpaces").val(data.firstName);
            console.log(data.language);

            $('input[type=checkbox]').each(function () {
                if (data.language === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });
            
            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                
                $(`#${key}`).val(val);
                
            });
        }
    });
});