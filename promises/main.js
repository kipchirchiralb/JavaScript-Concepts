//callback-function passed as argument to another function
const post=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}

];
function getPost(){
    setTimeout(()=>{
        let output='';
        post.forEach((value)=>{
            output+=`<li>${value.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);

}
function CreatePost(posts,callback){
    setTimeout(()=>{
post.push(posts);
callback();
    },2000);
}
CreatePost({title:'post three',body:'this is post three'},getPost);


//Promises
function demo(val){
    document.querySelector('#demo').innerHTML=val;
}
let mypromise= new Promise((resolve,reject)=>{
    let server=true;
    if(server === true){
        resolve('data available');
    }else{
        reject('failed to load data');
    }
});
mypromise.then((value)=>{
    demo(value);
})
mypromise.catch((err)=>{
    demo(err);
})