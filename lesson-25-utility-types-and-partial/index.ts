/*
Utility Types

1) Like a function, they take other types in as a parameter and return a new type, with some changes made to it.

2) Built-in to TypeScript; perform commonly-needed modifications to existing types.

3) Use "Generics" syntax using angle brackets (<>)

What does the Partial type do?
This modifies the type you pass in and turn all properties into optional properties.
*/
type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

// Use Partial type
type UpdatedUser = Partial<User>;

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];
// We shouldn't use any type for the updates parameter.
// Now we can use the Partial type we created for updates.
function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place. 
    // Check MDN if you need help with using Object.assign
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
        console.error("User not found");
        return;
    }
    Object.assign(foundUser, updates);
}

// Example updates:
updateUser(1, { username: "new_john_doe" }); // but we can't use User type above, because the 2nd argument is not a full User object
updateUser(4, { role: "contributor" });
// We don't know which properties will be provided in the second argument, so we can't just create a new type.

console.log(users)