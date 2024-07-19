
function signup(){
    let fname = document.getElementById("FirstName").value;
    let lname = document.getElementById("LastName").value;
    let setpass = document.getElementById("pass").value;
    let usermail = document.getElementById("email").value;
    let valid = 0;
    user = new Object();
    if( document.getElementById("FirstName").value =='' || document.getElementById("LastName").value=="" || document.getElementById("pass").value=="" ||  document.getElementById("email").value =="" ){
        let popup2 = document.getElementById("popup2"); 
            popup2.classList.add("open-popup2"); 
    }
    else{

    user = {
            firstname: `${fname}`,
            lastname : `${lname}`,
            password : `${setpass}`,
            email : `${usermail}`,
            accountnumber:`${Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000}`,
            phonenumber:'',
            mpin:'',
            balance:0,
            card_number:'',
            cvv:'',
            card_name:'',
            validity:''
           
        };
    const finalusers = JSON.parse(localStorage.getItem("setusers")) || [];    
    finalusers.push(user);   
    localStorage.setItem("setusers", JSON.stringify(finalusers)); 
    valid = valid+1;

        }
    // submission popup   
    if(valid == 1)
        {
            let popup = document.getElementById("popup"); 
            popup.classList.add("open-popup"); 

        }  
    //submission popup      
    }   
    
    // error popup
    function closepopup(){
        let popup = document.getElementById("popup");   
        window.location.href = "login.html";
        popup.classList.remove("open-popup"); 
    }

    function closepopup2(){
        let popup2 = document.getElementById("popup2");  
        popup2.classList.remove("open-popup2"); 
    }
    function closepopup3(){
        let popup3 = document.getElementById("popup3");  
        popup3.classList.remove("open-popup2"); 
    }


    // error popup

    var userlist = JSON.parse(localStorage.getItem("setusers"));
    // console.log(userlist);

    function userlogin(){
    let count = 0;    
        for(let i=0 ; i<userlist.length ; i++)
            {
                if(document.getElementById("email").value == userlist[i].email && document.getElementById("pass").value == userlist[i].password )
                    {
                        window.location.href = "dashboard.html";
                        count = count +1;
                        var position = i;
                        break;
                    }

                    
            }
        if(count == 0){
            let popup3 = document.getElementById("popup3"); 
            popup3.classList.add("open-popup2");  
        }    
        sessionStorage.setItem("presentuser", JSON.stringify(userlist[position]));
    }

    function loginredirect(){
        window.location.href = "login.html";
    }
    
    