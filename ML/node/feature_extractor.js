const constants=require('../common/constants.js');
const features=require('../common/features.js')

const fs=require('fs');

console.log("EXTRACTING FEATURES");

const samples=JSON.parse(
    fs.readFileSync(constants.SAMPLES)
);

for(const sample of samples){
    const paths=JSON.parse(
        fs.readFileSync(
            constants.JSON_DIR+"/"+sample.id+".json"
        )
    );
    sample.point=[
        features.getPathCount(paths),
        features.getPointCount(paths)
    ];
}

const featureNames=["Path Count","Point Count"];

fs.writeFileSync(constants.FEATURES,
    JSON.stringify({
        featureNames,
        samples:samples.map(s=>{
            return {
                id: s.id,
                point: s.point,
                label: s.label,
                student_id: s.student_id,
                student_name: s.student_name
            };
        })
    })
);

fs.writeFileSync(constants.FEATURES_JS,
    `const features=
    ${JSON.stringify({
        featureNames,
        samples:samples.map(s=>{
            return {
                id: s.id,
                point: s.point,
                label: s.label,
                student_id: s.student_id,
                student_name: s.student_name
            };
        })
    })}
    ;`
);

console.log("DONE!");