// function Parent() {
//     this.name = 'Parent';
// }

// function Child() {
//     Parent.call(this);
//     this.type = 'Child';
// }

// Child.prototype = Object.getPrototypeOf(Parent);
// Child.prototype.constructor = Child;
function func() {
    let i = 0
    return () => {
        i++
        console.log(i);
    }
}
const func1 = func()
const func2 = func()


func1()
func2()
func1()
func2()