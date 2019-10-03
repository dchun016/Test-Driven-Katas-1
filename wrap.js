function wrap(str, linesize){
    const arrStr=str.split(' ');
    let toReturn=arrStr[0]
    let currLineLength=arrStr[0].length;
    for(let i=1; i<arrStr.length; i++){
        if(currLineLength+arrStr[i].length>=linesize) {toReturn+='\n'
        currLineLength=0}
        else{
            toReturn+=' ';
            currLineLength++;
        }
        toReturn+=arrStr[i];
        currLineLength+=arrStr[i].length

    }
    return toReturn;
}
module.exports=wrap;