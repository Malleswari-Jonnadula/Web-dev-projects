function update(){
    const date=new Date();
    let actualHour = date.getHours(); 
    let hour = actualHour % 12 || 12; 
    const meridiem = actualHour >= 12 ? "PM" : "AM";
    hour = hour.toString().padStart(2, '0');

    const minutes=date.getMinutes().toString().padStart(2,0);
    const secs=date.getSeconds().toString().padStart(2,0);
    const time=`${hour}:${minutes}:${secs} ${meridiem} `;
    document.getElementById("clock").textContent=time;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    document.getElementById("date").textContent = `${dayName}, ${day}/${month}/${year}`;

    let greeting = "";
    if (actualHour >= 5 && actualHour < 12) {
        greeting = "Good Morning ☀️";
      } else if (actualHour >= 12 && actualHour < 17) {
        greeting = "Good Afternoon 🌤️";
      } else if (actualHour >= 17 && actualHour < 21) {
        greeting = "Good Evening 🌇";
      } else {
        greeting = "Good Night 🌙";
      }
      document.getElementById("greeting").textContent = greeting;
}
update();
setInterval(update,1000);
