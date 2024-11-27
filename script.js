const displayData=(data)=>{
    output.value+=data
}

const clearAll=()=>{
    output.value=""
    output.placeholder="0"
}

const remove=()=>{
    output.value=output.value.slice(0,-1)

}

const showResult=()=>{
    try {
        console.log("inside try block");
        
        output.value=eval(output.value)
    } catch (err) {
        console.log("inside catch block");

        console.log(err);
        output.placeholder="invalid expression"
        output.value=""
        
    }
    finally{
        console.log("inside finally block");
        
    }
}
