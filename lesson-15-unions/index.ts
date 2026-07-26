/*
  Often times, literal types with be combined with a concept called unions. 
  
  Create a union using the single pipe character |

*/

// Literal union type can also be nested inside of another type
type User = {
    username: string,
    role: "guest" | "member" | "admin"
}

// Here we can tell TypeScript, using unions, that userRole should only be allowed to be one of a certain number of strings.
type UserRoles = "guest" | "member" | "admin";
// In this case, a "guest", "member", or "admin"

let userRole = "admin";