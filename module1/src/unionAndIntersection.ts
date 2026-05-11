type UserRole = "admin" | "editor" | "viewer";

const getDashboardAccess = (role : UserRole) => {
    if (role === "admin") {
        return "Full access to the dashboard";
    }
    else if (role === "editor") {
        return "Limited access to the dashboard";
    }   
    else if (role === "viewer") {
        return "Read-only access to the dashboard";
    }       
    else {
        return "No access to the dashboard";
    }
}


console.log(getDashboardAccess("admin"));
console.log(getDashboardAccess("editor"));
console.log(getDashboardAccess("viewer"));


// intersection type &

type Employee = {
    name: string;
    age: number;
    department: string;
};

type Manager = {
    name: string;
    age: number;
    teamSize: number;
};

type ManagerEmployee = Employee & Manager;

const managerEmployee1: ManagerEmployee = {
    name: "Alice",
    age: 30,
    department: "Sales",
    teamSize: 5
};
console.log(managerEmployee1);
