// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBtbOMkmcvXgXIZkcTtdBjruLEOCdvH-0A",
    authDomain: "details-form-9adca.firebaseapp.com",
    projectId: "details-form-9adca",
    storageBucket: "details-form-9adca.appspot.com",
    messagingSenderId: "451832172482",
    appId: "1:451832172482:web:01c3f2ede3bb1d71e1d05b",
    measurementId: "G-6558RPM6KR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


  //reference message collection
  var messagesRef = firebase.database().ref('entry_detail');



// Listen for form Submit
document.getElementById('EntryForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();
    
    // Get Values
    var name = getInputVal('name');
    var phone_number= getInputVal('phone number');
    var gender = getInputVal('gender');
    var age = getInputVal('age');
    var bpm_and_spo2_level = getInputVal('bpm_and_spo2_level');
    var address = getInputVal('address');
    
    
    //Save Message
    saveMessage(name,phone_number,gender,age,bpm_and_spo2_level,address);

    //show alert
    document.querySelector('.alert').style.display ='block';

    //Hide alert 3s 
    setTimeout(function(){
      document.querySelector('.alert').style.display='none';
    },3000);

    document.getElementById('EntryForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name,phone_number,gender,age,bpm_and_spo2_level,address){
  var newMessageRef= messagesRef.push();
  firebase.database().ref('entry_detail/'+phone_number).set({
   name: name,
   phone_number:phone_number,
   gender:gender,
   age: age,
   bpm_and_spo2_level:bpm_and_spo2_level,
   address : address
  });
}