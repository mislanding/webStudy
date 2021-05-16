// class Student {
//     constructor() {
//         name: "Jarry";
//     };
//     name = 'Jarry';
//     getInfo() {
//         return {
//             name: "Tom",
//             getName() {
//                 console.log(this.name);
//             }
//         }
//     };
// }
// const stu = new Student();
// stu.getInfo().getName();

// function a() {
//     var user = "追梦子";
//     console.log(this.user); //undefined
//     console.log(this); //Window
// }
// a();


class C {
    a() {
        console.log(this);
    }
    b = () => {
        console.log(this);
    };
}
c = new C();
c.a();
f = c.a;
f();
c.b();