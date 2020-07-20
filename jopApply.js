function jobHome(){
    const token = "rnxdQFzTU-YuzViH78aH";
    //var id = 308;
  
    const row = document.querySelectorAll("[id=brdr]")[0];
    const container = document.getElementById("conte");
    
    const jobtitle = document.getElementById("titleforjob");
    const jbtime = document.getElementById("txs3");
    const jbaddress = document.getElementById("txs2");
    const jbtype = document.getElementById("txs1");
    const title = document.getElementById("outputtitle");
    const id = document.getElementById("outputid");
    const show = document.getElementById("show");
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/Jobhome",
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
          const myText = "";
          const addressArray = [];
          const titleArray = [];
          const typeArray = [];
          const idArray = [];
          //Set Arrays for data
          data.map((user) => {     
            addressArray.push(user.address);
            titleArray.push(user.title);
            typeArray.push(user.jtype);
            idArray.push(user.id);
          });
          container.innerHTML = "";
          //for loop to repeat printed jobs
          for (let i = 0; i <= 3; i++) {
            let clone = row.cloneNode(true);
            container.appendChild(clone);
            container.firstChild.innerHTML = "";
            jobtitle.innerHTML = titleArray[i];
            jbtype.innerHTML= typeArray[i];
            jbaddress.innerHTML= addressArray[i];
            sessionStorage.setItem("jobid-"+i,idArray[i]);
          }
          
      },
      error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}

//button function with another type
/*function jobSelected(){
    const token = "rnxdQFzTU-YuzViH78aH";
    
   
    
    const hedtitle = document.getElementById("headertitle");
    const jbtime = document.getElementById("txt3");
    const jbaddress = document.getElementById("txt2");
    const jbtype = document.getElementById("txt1");
    const desc = document.getElementById("description");
    
  
    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/Jobhome/'+jbid+'',
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
            
           hedtitle.innerHTML=data.title; 
           jbtype.innerHTML=data.jtype; 
           jbaddress.innerHTML=data.address; 
           jbtime.innerHTML=data.created_at; 

      },
        error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}*/



//Button Method
$('#bttn').click(function(){
  const token = "rnxdQFzTU-YuzViH78aH";
  const jbid = sessionStorage.getItem("jobid-"+i);


  const hedtitle = document.getElementById("headertitle");
  const jbtime = document.getElementById("txt3");
  const jbaddress = document.getElementById("txt2");
  const jbtype = document.getElementById("txt1");
  const desc = document.getElementById("description");
  

  $.ajax({
      url: 'https://successsroadv2.herokuapp.com/api/v1/Jobhome/'+jbid+'',
      type: "GET",
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      success: function (data) {
          
         hedtitle.innerHTML=data.title; 
         jbtype.innerHTML=data.jtype; 
         jbaddress.innerHTML=data.address; 
         jbtime.innerHTML=data.created_at; 
         //desc.innerHTML=data.desc;   
         return ;
    },
      error: function (error) {
      console.log(`Error ${error}`);
    }
  });
});

$(document).ready(function () {
  jobHome();
  
});