// const kNodes = [
//   new KNode([new KNode(5), new KNode(4)]),
//   new KNode(3),
//   new KNode([new KNode(2), new KNode(1)])
// ];
class  KNode  {  
    value;

      
    constructor(v)  {     this.value  =  v;   }

      
    getInt()  {
            return this.isInt() ? this.value : false;
        }  // return number

      
    isInt()  {
            return typeof this.value === 'number' && !isNaN(this.value);
        }  // return boolean

      
    getList()  {
            if (Array.isArray(this.value)) {
                return this.value;
            }
            return false;
        }  // return [KNode]: KNode对象的数组
}

class  KNodeIterator  {
    //当前列表
    kNodes;
    //遍历至当前列表所在的位置
    step = -1;
    //列表栈
    list_stack = [];
    //指针栈
    step_stack = [];
    constructor(v)  {    
        this.kNodes  =  v;  // 要求O(1)
        // this.list = v;
    }

      
    hasNext()  {
            let tmp_step = this.step + 1;
            let tmp_list = this.kNodes;
            let tmp_list_stack = this.list_stack;
            let tmp_step_stack = this.step_stack;
            //循环遍历至返回结果
            //大体思路与next()相同
            while (true) {
                // console.log(tmp_list);
                // console.log(tmp_step);
                //当遍历当前列表至结尾时
                if (tmp_step >= tmp_list.length) {
                    //判断栈是否为空，若空则遍历已经结束，则没有下一个元素
                    if (tmp_step_stack.length == 0) {
                        return false;
                    };
                    //非空则恢复上一次的现场，继续进行遍历
                    tmp_list = tmp_list_stack.pop();
                    tmp_step = tmp_step_stack.pop() + 1;
                    continue;
                    //当当前节点为数字节点时，返回
                } else if (!Array.isArray(this.kNodes[this.step]) && tmp_list[tmp_step].isInt()) {
                    return true;
                    //当前节点为列表且此列表为空列表、直接跳过
                } else if (tmp_list[tmp_step].length == 0) {
                    tmp_step++;
                    continue;
                    //当前节点为列表且非空、当前场景入栈并遍历当前节点
                } else {
                    tmp_list_stack.push(tmp_list);
                    tmp_step_stack.push(tmp_step);
                    tmp_list = tmp_list[tmp_step].getList();
                    tmp_step = 0;
                    continue;
                }
            }
        }  // return boolean 要求O(1), 最坏情况下O(N)

    //通过栈实现深度优先遍历、每一步操作为O(1)
    next()  {
            this.step++;
            //当遍历完当前列表后，从栈中寻找上一次遍历的现场并恢复
            if (this.step >= this.kNodes.length) {
                this.kNodes = this.list_stack.pop();
                this.step = this.step_stack.pop();
                return this.next();
                //当当前元素为int时，返回值
            } else if (!Array.isArray(this.kNodes[this.step]) && this.kNodes[this.step].isInt()) {
                return this.kNodes[this.step].getInt();
                //或者当前元素为array时，将当前现场入栈，深入进行遍历
            } else {
                this.list_stack.push(this.kNodes);
                this.step_stack.push(this.step);
                this.kNodes = this.kNodes[this.step].getList();
                this.step = -1;
                return this.next();
            }
        }  // return number 要求O(1)
}

console.log("案例1--------------------------");
const  kNodes  =   [  
    new  KNode([new  KNode(5),  new  KNode(4)]),   
    new  KNode(3),   
    new  KNode([new  KNode(2),  new  KNode(1)]),   
    new  KNode([])
];
const  iter  =  new  KNodeIterator(kNodes);

while  (iter.hasNext())  {  
    const  resourceId  =  iter.next();  
    console.log('resourceId - ',  resourceId);
}
console.log("案例2---------------------------");
const kNodes_1 = [
    new KNode([new KNode(1),
        new KNode([new KNode(3),
            new KNode([new KNode(7)])
        ]),
        new KNode(8)
    ])
]
const iter_1 = new KNodeIterator(kNodes_1);
while (iter_1.hasNext()) {
    const  resourceId  =  iter_1.next();  
    console.log('resourceId - ',  resourceId);
}