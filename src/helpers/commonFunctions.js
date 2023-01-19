
export const getData=()=>{
    let data= localStorage.getItem("todolist")
    if(data){
     return JSON.parse(localStorage.getItem("todolist"))  //this data was in string but we needed array because items is expecting an array so we use JSON.stringify
    }
    else{
     return []
    }
 }