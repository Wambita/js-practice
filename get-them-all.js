//getArchitects: find all  a tags and check those with class architects and non architects
export const getArchitects = () =>[document.querySelectorAll("body a"),
document.querySelectorAll("body span")]

//getClassical : filters the architects further to find those in the classical class and those who arent
export const getClassical = () =>[document.querySelectorAll("a.classical"), 
document.querySelectorAll("a:not(.classical)")]

//getActive functionreturns 2 an array of  2 arrays one containig acitve and non active 
export const getActive = () => [document.querySelectorAll("a.classical.active"),
document.querySelectorAll("a.classical:not(.active)")]

//getBonannoPisano identifies specific  archiect by their id and retrns all the remaining active classbcal architects
export const getBonannoPisano = () => [document.querySelector("#BonannoPisano"),
document.querySelectorAll("a.classical.active")]