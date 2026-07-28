type UserRole = "guest" | "member" | "admin";

// We can compose types together however we want. It doesn't just have to be nested objects.
type User = {
    username: string,
    role: UserRole // role of type UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

// The colon : that we put after the arguments of our function allows us to specify what type of data should be returned from our function.
// This can be inferred by TypeScript, but in many instances, it can be really helpful to explicitly type what should be returned from your function. Especially helps when refactoring.
// : User
function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found`);
    }
    return user;
}