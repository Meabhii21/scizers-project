function validate(){
    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          alert("Please enter only Numbers.");
          return false;
        }
      
        return true;
      }
      function ValidateNo() {
        var phoneNo = document.getElementById('txtPhoneNo');
        var txtName = document.getElementById('txtName');
    
        if(txtName.value == "" || txtName.value== null){
            alert("please Enter Name");
            return false;
        }
      
        if (phoneNo.value == "" || phoneNo.value == null) {
          alert("Please enter your Mobile No.");
          return false;
        }
        if (phoneNo.value.length < 10 || phoneNo.value.length > 10) {
          alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
          return false;
        }
        return true;
      }
    }
    
    module.exports=validate();