/*
Omit Type

What does the Omit type do?
Omit takes in a type AND a string (or union of strings) property name(s), and returns a new type with those properties removed.

Omit<BaseType, "property we want to omit" | "another property">
Omit<User, "id">
Omit<User, "id" | "user">
*/
type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

// We don't want newUser parameter to have an any type.
// We want all of the properties of user to exist (other than id), so partial doesn't work (everything is optional).
// If we're just using this Omit utility type once in our code, we can just do it inline.
// Replace newUser: any with Omit<User, "id">
// We are having the base type of User, omitting "id"
function addNewUser(newUser: Omit<User, "id">): User {
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
    const user: User = {
        id: nextUserId++,
        ...newUser
    };
    users.push(user);
    return user;
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)