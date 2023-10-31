const monguooes=require("mongoose");
const validator=require("validator")
monguooes.connect("mongodb://localhost:27017/notest")  //it return promise
.then(()=>{console.log("connectioin sucess")})
.catch((err)=>{console.log(err)})


const mySchema=new monguooes.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("this is not valid email......")
            }
        }
    },
    video:{
        type:Number,
        minlength:1,
        maxlength:10,
        //custom validatioin error 
        validate(value){
            if(value<0){
                throw new Error('do not accept negative values');
            }
        }

        //here is 2nd method to do same thing
        // validate:{
        //     validator:function(v){
        //         return v.length<0;
        //     },
        //     message:"do not put negative values"
        // }
    },
    ctype:{
        type:String,
        enum:["front end dev","back end dev","full stack dev"]
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});

const Mycollection=new monguooes.model("Mycollection",mySchema);


const createDocument=async ()=>{
    try{
    

        const devData=new Mycollection({
            name:"Deva dhore",
            email:"abc09@gmail.com",
            ctype:"back end dev",
            video:100,
            active:true
        })
        
        const result= await Mycollection.insertMany([devData]);//it return promise and sve the data in collection it take some time to exsicute
        console.log(result)
        
    }catch(err){
        console.log(err)
     }
    }
 createDocument()