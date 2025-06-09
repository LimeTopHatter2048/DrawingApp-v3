class Chart{
    constructor(container,samples,options){
        this.samples=samples;

        this.axesLabels=options.axesLabels;
        this.styles=options.styles;

        this.canvas=document.createElement("canvas");
        this.canvas.width=options.size;
        this.canvas.height=options.size;
        this.canvas.style="background-color:white;";
        container.appendChild(this.canvas);
        
        this.ctx=this.canvas.getContext("2d");

        this.margin=options.size*0.1;
        this.transparency=0.5;
    }
}