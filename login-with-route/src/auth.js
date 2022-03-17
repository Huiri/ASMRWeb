const users = [
    { email: "chaz@test.com", password: "123", name: "Moon" },
    { email: "happy@test.com", password: "123", name: "Jeon" },
    { email: "day@test.com", password: "123", name: "Meow" },
  ];
  
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }