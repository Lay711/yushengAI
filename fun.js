//数据不可变性
let data = {count :1}
let foo = (data) => {
    let lily=JSON.parse(JSON.stringify(data));
    lily.count=3;
}