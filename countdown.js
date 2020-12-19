const getRemainTime = deadLine => {
    let now = new Date(),
    remainTime = (new Date(deadLine) - now + 1000) / 1000,
    remainSeconds =('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes =('0' + Math.floor(remainTime /60 % 60)).slice(-2),
    remainHours =('0' + Math.floor(remainTime /3600 % 24)).slice(-2), 
    remainDays = Math.floor(remainTime / (3600 % 24));
    
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    }
 };

 const countdown = (deadLine, elem, finalMessage) => {
     const el = document.getElementById(elem);

     const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadLine);
        el.innerHTML = `${time.remainDays}d:${time.remainHours}h:${time.remainMinutes}m:${time.remainSeconds}s`;

        if(time.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

     }, 1000)
                                                                
 };

 // "Aqui se agrega la fecha para la cuenta regresiva con formato del navegador y la funcion countdown"
