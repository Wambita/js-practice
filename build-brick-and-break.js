export const build =(bricks)=>{
    let count =0;
    const interval = setInterval(()=>{
    if (count>=bricks){
    clearInterval(interval);
    return;
    }
    const brick = document.createElement('div');
    brick.id = `brick-${count+1}`;
    if ((count%3)===1){
    brick.dataset.foundation = 'true';
    }
    document.body.appendChild(brick);
    count++
    },100)
    }

    export const repair =(...ids)=>{
        for(let i=0; i<ids.length;i++){
        let div= document.getElementById(ids[i])
        let r= ids[i].replace('brick-','')
        if ((parseInt(r))%3==2){
        div.dataset.repaired='in progress'
        }else{
        div.dataset.repaired='true'
        }
        }
        
        }
        export const destroy= ()=>{
        const last = document.querySelector('div:last-of-type')
        if (last){
        last.remove()
        }
        }