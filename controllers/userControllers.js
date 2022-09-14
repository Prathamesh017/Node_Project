import fetch from "node-fetch"

// @get method with /
// get greeting
export const simpleGreet=(req,res)=>{
    res.send("Hello Todos");
}

// @get method with /todos
// to get todos without user
export const getTodos=async (req,res)=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const Todos=await response.json();
    Todos.forEach(element => {
        delete element["userId"];
});
    res.send(Todos);

}

// to get todos of particular userid
export const getTodo=async(id)=>{
const response=await fetch(`https://jsonplaceholder.typicode.com/todos`);
const Todos=await response.json();
const selectedTodos=Todos.filter((todo)=>{
        return todo.userId===parseInt(id,10);
})
console.log(selectedTodos);
 return selectedTodos
}



//@get with /user/:id
// to merge a user with  todos
export const userTodos=async (req,res)=>{
    const {id}=req.params;
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const Todos=await response.json();
    const todo=await getTodo(id);

    res.send({...Todos,"todos":todo});

}