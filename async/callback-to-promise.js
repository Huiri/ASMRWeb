// Callback Hell example
class UserStorage{
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(
                    (id === 'chaz' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 1000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                if(user === 'chaz') {
                    resolve({name : 'chaz', role : 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
    
        });
    }
}
let userStorage = new UserStorage();

let id = prompt('enter your id');
let password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);