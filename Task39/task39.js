// bài 1: Viết một hàm getData nhận vào một callback và gọi callback đó sau 1 giây với dữ liệu là mảng [1, 2, 3, 4].
function getData1(callback){
    setTimeout(() => {
        const arr = [1,2,3,4];
        callback(arr);
    },1000)
}
getData1((data) =>{
    console.log(data);
})

// bài 2: Viết một hàm getData  sử dụng Promise

function getData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            const arr = [1,2,3,4];
            resolve(arr);
        },1000)
    });
}

getData().then((data) => console.log(data))
.catch((error) => console.error(error));

//bài 3: Viết một hàm getData như bài 1 nhưng sử dụng async/await

function getData() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            const arr = [1,2,3,4];
            resolve(arr);
        },1000)
    });
}

async function callData() {
    const result = await getData();
    console.log(result);
}

callData();