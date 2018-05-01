function getDate(dateStr){
let dd, mm;
let yyyy="";
dd=dateStr[0]+dateStr[1];
mm=dateStr[3]+dateStr[4];
for(let i=6; i<dateStr.length; i++) {
yyyy+=dateStr[i];
}
let arr={"День": dd,
 		 "Месяц":mm, 
 		 "Год":yyyy};
return arr;
}