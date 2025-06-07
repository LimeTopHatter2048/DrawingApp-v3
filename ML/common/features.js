const features={};

//Number of strokes (each stroke is a path).
features.getPathCount=(paths)=>{
    return paths.length;
}

//Converts del ray of array of points into one big array 
//Total number of points drawn.
features.getPointCount=(paths)=>{
    const points=paths.flat();
    return points.length;
}

if(typeof module!=='undefined'){
    module.exports=features;
}