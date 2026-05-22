class TypeScript{
    version:string
    constructor(version:string){
        this.version=version
    }
    displayinfo():void{
        console.log(this.version)
    }
}
const info=new TypeScript("6.0.3")
info.displayinfo()

//non prameterised constructor with return type