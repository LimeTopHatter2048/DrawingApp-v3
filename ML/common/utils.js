const utils={};

utils.flaggedUser=[1663053145814, 1663053145814, 1663053145814];

utils.formatPercent=(n)=>{
    return (n*100).toFixed(2)+"%";
}

utils.printProgress=(count,max)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0)
    const percent=utils.formatPercent(
        count/max
    );
    process.stdout.write(count+"/"+max+
        " ("+percent+")"
    );
}

utils.groupBy=(objArray,key)=>{
    const groups={};
    for(let obj of objArray){
        const val=obj[key];
        // If student ID was just identified 
        //we don't have any drawings from them yet, 
        // we initialize it 
        if(groups[val]==null){
            groups[val]=[];
        }
        groups[val].push(obj);
    }
    return groups;
}

if(typeof module!=='undefined'){
    module.exports=utils;
}