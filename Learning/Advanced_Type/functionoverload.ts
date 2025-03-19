function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string|any[]){
    if(typeof val==="string"){
        const numberOfwords=val.split(' ').length;
        return `${numberOfwords} words`;
    }

    return val.length;
}


const numberOfwords=getLength('Does this work?')
numberOfwords.length;

const numItems=getLength(['Sports','Cookies']);