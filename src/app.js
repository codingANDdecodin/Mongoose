const monguooes=require("mongoose");

// monguooes.connect("mongodb://localhost:27017/test")
// .then(()=>{console.log("connection successfull")})
// .catch((err)=>{console.log(err)})

monguooes.connect("mongodb://localhost:27017/notest")  //it return promise
.then(()=>{console.log("connectioin sucess")})
.catch((err)=>{console.log(err)})

const mySchema=new monguooes.Schema({
    name:{
        type:String,
        required:true
    },
    video:Number,
    ctype:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});

//here we create new class of mongoes model
const Mycollection=new monguooes.model("Mycollection",mySchema);//(collectionName,schema) return promise


//insert single data in collection
// const createDocument=async ()=>{
// try{

//     const myData=new Mycollection({
//         name:"ram",
//         ctype:"back end dev",
//         video:120,
//         active:true
//     })
    
//     const result= await myData.save();//it return promise and sve the data in collection it take some time to exsicute
//     console.log(result)
    
// }catch(err){
//     console.log(err)
//  }
// }


//send multiple item on collection
const createDocument=async ()=>{
    try{
    
        const shaiData=new Mycollection({
            name:"shailesh",
            ctype:"full stack dev",
            video:12,
            active:true
        })
        const ajData=new Mycollection({
            name:"ajay",
            ctype:"back end dev",
            video:1,
            active:false
        })
        const pawData=new Mycollection({
            name:"pawle",
            ctype:"front end dev",
            video:1,
            active:false
        })
        const devaData=new Mycollection({
            name:"deva",
            ctype:"back end dev",
            video:1202,
            active:true
        })
        
        const result= await Mycollection.insertMany([shaiData,ajData,pawData,devaData]);//it return promise and sve the data in collection it take some time to exsicute
        console.log(result)
        
    }catch(err){
        console.log(err)
     }
    }
// createDocument()


//********************read data from collection***************

// const getData=async ()=>{
//    const result= await Mycollection.find({ctype:"front end dev"})
//    .limit(1)
//    console.log(result);
// }
// getData();


//comparison oprator in mongodb
//gt,gte,lt,lte,in
// const getData=async ()=>{
//    const result= await Mycollection.find({ctype:{$in:["front end dev","full stack dev"]}})
//    console.log(result);
// }
// getData();




//logical oprator in mongo
//$and,$or,$nor
// const getData=async()=>{
//     // const result=await Mycollection.find({$and:[{ctype:"front end dev"},{video:10}]})
//     // const result=await Mycollection.find({$or:[{ctype:"front end dev"},{video:10}]})
//     const result=await Mycollection.find({$nor:[{ctype:"front end dev"},{video:10}]})


//     console.log(result)
// }
// getData()

//sorting and counting in mongo
// const getData=async()=>{
//    try{
//           //this is for count
//           //const result=await Mycollection.find().countDocuments()  //return number of result found
//           const result=await Mycollection.find({active:true})
//           .sort({video:-1})
//           console.log(result)
//    }catch(err){
//     console.log(err)
//    }
// }
// getData(); 

// //****************UPDATE ON DATABASE************* */
// const updateDocument=async(_id)=>{
//     try{
//            const result=await Mycollection.findByIdAndUpdate({_id},{
//             name:"AJIy",
//             video:1234
//            },{
//             new:true
//            });
//            console.log(result)
//     }catch(err){
//         console.log(err);
//     }
// }
// updateDocument("6450e02ac31e660289b5ae55");
//**********delete on database*********** */

const deleteDocument=async(_id)=>{
    try{
        //using delete/deleteOne method
        // const result=await Mycollection.deleteOne({_id});
        const result=await Mycollection.findByIdAndDelete({_id})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
deleteDocument("6450e48d915f59bd642f7f58")
