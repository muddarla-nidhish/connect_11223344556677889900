function addUser(){
    user_name=documnet.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="room.html"
}