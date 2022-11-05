$(document).ready(function(){
    $("#formf").validate({
        rule:{
            nametxt:{
                    required:true,
                    minlegth:5
            },
            stxt:{
                required:true,
                minlegth:7
            },
            daytxt:{
                required:true
            }
        },
        messages:{
            nametxt:{
                required:"entr fl name",
                minlegth:"enter at least 4 chacr"

            }
        }


})

})