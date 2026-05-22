class TypeScript2
    version:string
    constructor(){
        this.version="9.0.7"
    }
    displayinfo():string{
        return this.version
    }
}
const info=new TypeScript2()
info.displayinfo()