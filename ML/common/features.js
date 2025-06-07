const features={};

features.getPathCount=(paths)=>{
    return paths.length;
}

//Converts del ray of array of points into one big array 
features.getPointCount=(paths)=>{
    const points=paths.flat();
    return points.length;
}

if(typeof module!=='undefined'){
    module.exports=features;
}