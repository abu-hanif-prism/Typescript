"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboardAccess = (role) => {
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
};
console.log(getDashboardAccess("admin"));
console.log(getDashboardAccess("editor"));
console.log(getDashboardAccess("viewer"));
const managerEmployee1 = {
    name: "Alice",
    age: 30,
    department: "Sales",
    teamSize: 5
};
console.log(managerEmployee1);
//# sourceMappingURL=unionAndIntersection.js.map