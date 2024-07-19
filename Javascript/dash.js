const storeduser = JSON.parse(sessionStorage.getItem("presentuser"));
let fname = storeduser.firstname;
let lname = storeduser.lastname;
document.getElementById("chguser").innerHTML = `${fname} ${lname},`;

function logout(){
    sessionStorage.clear();
    window.location.href = "index.html";
}
//updates user details based on the user stored in session storage
document.getElementById("first_name").innerHTML = `: ${fname}`;
document.getElementById("last_name").innerHTML = `: ${lname}`;
document.getElementById("accno").innerHTML = `: ${storeduser.accountnumber}`;
document.getElementById("mailid").innerHTML = `: ${storeduser.email}`;
document.getElementById("phno").innerHTML = `: ${storeduser.phonenumber}`;
document.getElementById("chgbalance").innerHTML = `$${storeduser.balance}`;

const active_users = JSON.parse(localStorage.getItem("setusers"));
var current_pos_no = 0;
for( let k=0 ; k<active_users.length; k++){
    if(storeduser.email == active_users[k].email && storeduser.accountnumber == active_users[k].accountnumber){
        current_pos_no = k;
        break;
    }
}
//add card popup
function atm_card_add(){
    close_card_changepopup();
    transfer_popup_close();
    phonepopupclose();
    mpin_popup_close();
    deposit_popup_close();
    let atm_card = document.getElementById("atm_card");
    atm_card.classList.add("atm_card_open");
    let container02 = document.getElementById("container02");
    container02.classList.add("hiderightcontent");
   
}
function atm_card_close(){
    let atm_card = document.getElementById("atm_card");
    atm_card.classList.remove("atm_card_open");
    let container02 = document.getElementById("container02");
    container02.classList.remove("hiderightcontent");
    setTimeout(function(){
        window.location.reload();
     }, 500);
}
function atm_close_notimeout(){
    let atm_card = document.getElementById("atm_card");
    atm_card.classList.remove("atm_card_open");
}
//add card popup ends here

// transfer done popup opening and closing
function transferdone_open(){
    let transfer_done = document.getElementById("transfer_done");
    transfer_done.classList.add("opening_transferdone");
    setTimeout(function(){
        window.location.reload();
     }, 800);
}
function transferdone_close(){
    let transfer_done = document.getElementById("transfer_done");
    transfer_done.classList.remove("opening_transferdone");
    window.location.reload();
}
// transfer done popup opening and closing ends here


//transfer popup
function transfer_popup_open(){
    deposit_popup_close();
    phonepopupclose();
    mpin_popup_close();
    let container02 = document.getElementById("container02");
    container02.classList.add("hiderightcontent");
    let transfer = document.getElementById("transfer");
    transfer.classList.add("open_transfer");
}
function transfer_popup_close(){
    let container02 = document.getElementById("container02");
    container02.classList.remove("hiderightcontent");
    let transfer = document.getElementById("transfer");
    transfer.classList.remove("open_transfer"); 
}
//tranfer popup ends here

//deposit done popup
function deposit_done_popup(){
    let deposit_done = document.getElementById("deposit_done");
    deposit_done.classList.add("openingpopup");
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
function deposit_done_popupclose(){
    let deposit_done = document.getElementById("deposit_done");
    deposit_done.classList.remove("openingpopup"); 
    window.location.reload();
}
//popup window for mpin
//opening popup
function mpin_popup_open(){
    atm_close_notimeout();
    phonepopupclose();
    deposit_popup_close();
    transfer_popup_close();
    let detailspopup = document.getElementById("detailspopup");
    detailspopup.classList.add("closedetailspopup");
    let mpin_form = document.getElementById("mpin_form"); 
    mpin_form.classList.add("depositpopupopen"); 
    close_mpin_changepopup();
}

function close_mpin_changepopup(){
    let mpin_change = document.getElementById("mpin_change");
    mpin_change.classList.remove("openingpopupmpin");
}
function close_card_changepopup(){
    let card_change = document.getElementById("card_change");
    card_change.classList.remove("openingpopupmpin");
}


//closing pop up
function mpin_popup_close(){
    let mpin_form = document.getElementById("mpin_form");  
    mpin_form.classList.remove("depositpopupopen"); 
    let detailspopup = document.getElementById("detailspopup");
    detailspopup.classList.remove("closedetailspopup");
}
//popup window for mpin ends here


//popup window for deposit 
//opening popup
function deposit_popup_open(){
    phonepopupclose();
    mpin_popup_close();
    transfer_popup_close();
    let detailspopup = document.getElementById("detailspopup");
    detailspopup.classList.add("closedetailspopup");
    let deposit_form = document.getElementById("deposit_form"); 
    deposit_form.classList.add("depositpopupopen"); 
}
//closing popup
function deposit_popup_close(){
    let deposit_form = document.getElementById("deposit_form");  
    deposit_form.classList.remove("depositpopupopen"); 
    let detailspopup = document.getElementById("detailspopup");
    detailspopup.classList.remove("closedetailspopup");
}
//popup window for deposit ends here


// popup window for add/change phone number window
//opening popup
function phonepopup(){
    atm_close_notimeout();
    mpin_popup_close();
    transfer_popup_close();
    deposit_popup_close();
    let form_container = document.getElementById("form_container"); 
    let detailspopup = document.getElementById("detailspopup");
    detailspopup.classList.add("closedetailspopup");
    form_container.classList.add("openpopup4"); 
}

//closing popup
function phonepopupclose(){
    let form_container = document.getElementById("form_container");  
    form_container.classList.remove("openpopup4"); 
    let detailspopup = document.getElementById("detailspopup");
    detailspopup.classList.remove("closedetailspopup");
}
// popup window for add/change phone number window ends here


// var alterusers = localStorage.getItem("setusers");
// var position_no = 0;
// for( let i=0 ; i<alterusers.length; i++){
//     if(storeduser.email == alterusers.email && storeduser.accountnumber == alterusers.accountnumber){
//         position_no = i;
//         break;
//     }
// }

//updating the value of phone number in local storage and session storage
function submitphoneno(){
    let phonenumber = document.getElementById("phonenumber").value;    
    const currentuser = JSON.parse(sessionStorage.getItem("presentuser"));
    currentuser.phonenumber = phonenumber;
    const finalusers = JSON.parse(localStorage.getItem("setusers")) || [];    
    finalusers[current_pos_no] = currentuser;   
    localStorage.setItem("setusers", JSON.stringify(finalusers)); 
    sessionStorage.setItem("presentuser", JSON.stringify(currentuser));
}
//ends here

//popup for mpin change decision
function decision_mpin(){
    if(storeduser.mpin!==""){
        let mpin_change = document.getElementById("mpin_change");
        mpin_change.classList.add("openingpopupmpin");
    }
    else
    {
        mpin_popup_open();
    }
    
}
//popup fro mpin change decision ends here 


//function for setting/changing mpin
function set_mpin(){
let entered_pass = document.getElementById("epass").value;
if(entered_pass == storeduser.password)
    {
        var mpin_pass = document.getElementById("mpinpass").value;
        let current_user = JSON.parse(sessionStorage.getItem("presentuser"));
        current_user.mpin = mpin_pass;
        const finalusers = JSON.parse(localStorage.getItem("setusers")) || [];
        finalusers[current_pos_no] = current_user;   
        localStorage.setItem("setusers", JSON.stringify(finalusers)); 
        sessionStorage.setItem("presentuser", JSON.stringify(current_user));
        alert("MPIN set successfully!");

    }
    
}
//ends here

//finctions for adding and deducting money as per transaction request
function add_money(a,b){
    return a+b;    
}
function deduct_money(x,y){
    return x-y;
}
//ends here

//function for depositing money
function depositing_money(){
    let entered_pin = document.getElementById("dpass").value;
    if(storeduser.mpin == entered_pin)
        {
           
            let deposit_money = parseInt( document.getElementById("deposit").value);
            let temp_user = JSON.parse(sessionStorage.getItem("presentuser"));
            let current_balance =parseInt(temp_user.balance);
            let new_balance = add_money(current_balance , deposit_money);         
            temp_user.balance = new_balance;
            const finalusers = JSON.parse(localStorage.getItem("setusers")) || [];
            finalusers[current_pos_no] = temp_user;   
            localStorage.setItem("setusers", JSON.stringify(finalusers)); 
            sessionStorage.setItem("presentuser", JSON.stringify(temp_user));
            document.getElementById("change_popup_content").innerHTML = `$${deposit_money} is Deposited to your Account. Changes will be reflected shortly.`;
            deposit_done_popup();
            deposit_popup_close();
        }
        else
        {
            alert("wrong MPIN! Deposit cannot be performed.")
        }
}
//ends here
document.getElementById("chgbalance").innerHTML = `$${storeduser.balance}`;



//function for transfering money
function transfering_money(){
    let entered_mpin = document.getElementById("cnfr_mpin").value;
    let reci_no = document.getElementById("rec_acc_no").value;
    let tranfer_amount = parseInt(document.getElementById("transfer_money").value);
    let allusers = JSON.parse(localStorage.getItem("setusers"));
    var recipient_pos =  0;
    for(let j=0 ; j<allusers.length ; j++){
        if(allusers[j].accountnumber==reci_no){
            recipient_pos = j;
            break;
        }
       
    }
   
    if(storeduser.mpin == entered_mpin && allusers[recipient_pos].accountnumber == reci_no && tranfer_amount <= parseInt(storeduser.balance))
        {
            let sender = JSON.parse(sessionStorage.getItem("presentuser"));
            let sender_balance = parseInt(sender.balance);
            let new_sender_balance = deduct_money(sender_balance , tranfer_amount);
            sender.balance = new_sender_balance;
            const s_users = JSON.parse(localStorage.getItem("setusers")) || [];
            s_users[current_pos_no] = sender;   
            localStorage.setItem("setusers", JSON.stringify(s_users));
            let recipient = s_users[recipient_pos];
            let recipient_current_balance = parseInt(recipient.balance);
            let recipient_new_balance = add_money(recipient_current_balance , tranfer_amount);
            recipient.balance = recipient_new_balance;
            s_users[recipient_pos] = recipient;
            localStorage.setItem("setusers" , JSON.stringify(s_users));
            sessionStorage.setItem("presentuser" , JSON.stringify(sender));
            transferdone_open();
            transfer_popup_close();

        }
        else{
         document.getElementById("transfer_content").innerHTML = "Transaction failed! Ensure sufficient Balance and check credentials entered.";
         transferdone_open();
         transfer_popup_close();
        }
}

function submit_card_details(){
    
    let entered_cardno = document.getElementById("cardNumber").value;
    let entered_holdername = document.getElementById("holderName").value;
    let card_expiry = document.getElementById("expiry").value;
    let entered_cvv = document.getElementById("cvv").value;
    if(entered_cardno != '' || entered_holdername != '' || card_expiry != '' || entered_cvv != ''){
    const current_user_1 = JSON.parse(sessionStorage.getItem("presentuser"));
    current_user_1.card_number = entered_cardno;
    current_user_1.card_name = entered_holdername;
    current_user_1.validity = card_expiry;
    current_user_1.cvv = entered_cvv;
    sessionStorage.setItem("presentuser" , JSON.stringify(current_user_1));
    const s_users = JSON.parse(localStorage.getItem("setusers")) || [];
    s_users[current_pos_no] = current_user_1;   
    localStorage.setItem("setusers", JSON.stringify(s_users));
    atm_card_close();
    }
    else{
        alert("fill properly");
    }

    
}

document.getElementById("display_holdername").innerHTML = `${storeduser.card_name}`;
document.getElementById("display_cardno").innerHTML =  `${storeduser.card_number}`;
document.getElementById("display_date").innerHTML = `${storeduser.validity}`;

function card_change_decision(){
    if(storeduser.card_number == '' && storeduser.cvv == '' && storeduser.card_name ==''){
        atm_card_add();

    }
    else{
        let card_change = document.getElementById("card_change");
        card_change.classList.add("openingpopupmpin");
    }
}
