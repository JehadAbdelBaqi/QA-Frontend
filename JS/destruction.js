
let user = {
    firstName: "John",
    years: 30
    };
    
    let {firstName, years: age, isAdmin = false} = user;
    
    alert( firstName );
    alert( age );
    alert( isAdmin );