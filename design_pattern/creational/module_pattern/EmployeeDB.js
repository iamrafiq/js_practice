const employeeDb = ()=>{
    return {
        dbInfo:(data)=>{
            console.log(`ID ${data.id} Name: ${data.name} rank: ${data.rank}`);
        }
    }
}

export default employeeDb;