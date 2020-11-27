
function searchFun(){
    var filter = document.querySelector("#myInput").value.toUpperCase();
    var myTable=document.querySelector("#myTable");
    var tr=myTable.getElementsByTagName("tr");
  
    for(var i=0;i<tr.length;i++){
      var td =tr[i].getElementsByTagName("td")[0];
      if(td){
        var textValue =td.textContent || td.innerHTML;
        if(textValue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
  }