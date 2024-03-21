document.getElementById("sendButton").onclick = function(){
    var name = document.getElementById("sendText").value;
    //document.getElementById("userName").innerHTML = name;
    window.location.href = 'userInfo.html';
    localStorage.setItem("NAME", name);
    return;
}

//Code learned from https://bobbyhadz.com/blog/javascript-array-push-if-not-exist 
//by Borislav Hadzhiev

const user_interests = []; 

document.getElementById("design").onclick = function(){
    var design_li = document.getElementById("design").value;
    if (!user_interests.includes(design_li)) {
        user_interests.push("design");
      }
    console.log(user_interests);
    localStorage.setItem("INTERESTS", user_interests);
    return;
}
document.getElementById("food").onclick = function(){
    var food_li = document.getElementById("food").value;
    if (!user_interests.includes(food_li)) {
        user_interests.push("food");
      }
    console.log(user_interests);
    localStorage.setItem("INTERESTS", user_interests);
    return;
}
document.getElementById("health").onclick = function(){
    var health_li = document.getElementById("health").value;
    if (!user_interests.includes(health_li)) {
        user_interests.push(health_li);
      }
    console.log(user_interests);
    localStorage.setItem("INTERESTS", user_interests);
    return;
}
document.getElementById("sports").onclick = function(){
    var sports_li = document.getElementById("sports").value;
    if (!user_interests.includes(sports_li)) {
        user_interests.push(sports_li);
      }
    console.log(user_interests);
    localStorage.setItem("INTERESTS", user_interests);
    return;
}
document.getElementById("tourism").onclick = function(){
    var tourism_li = document.getElementById("tourism").value;
    if (!user_interests.includes(tourism_li)) {
        user_interests.push(tourism_li);
      }
    console.log(user_interests);
    localStorage.setItem("INTERESTS", user_interests);
    return;
}
document.getElementById("tech").onclick = function(){
    var tech_li = document.getElementById("tech").value;
    if (!user_interests.includes(tech_li)) {
        user_interests.push(tech_li);
      }
    console.log(user_interests);
    localStorage.setItem("INTERESTS", user_interests);
    return;
}
console.log(user_interests[1]);
