import User from '../model/user.model.js'
import axios from 'axios'

export const saveUser=async (req,res)=>{
try{

    const {clerkId,email,username,password,phoneNumber,ImageUrl} = req.body
    console.log("daatat",clerkId, );
    console.log("daatat",email, );
    console.log("daatat",username, );
    console.log("daatat",password, );
    console.log("daatat",phoneNumber, );
    // console.log("daatat",clerkId, );
    // console.log("daatat",clerkId, );
        let user=await User.findOne({clerkId});

        if(!user){
            user = new User({
              clerkId,
              email,
              username,
              phoneNumber,
            });
            await user.save()
        }
        res.status(200).json({message:"User saved successfully",user})
    }catch(error){
        res.status(500).json({message:"Error saving user",error})
    }


}

export const getUser=async (req,res)=>{

    try {
      const response = await axios.get("https://api.clerk.com/v1/users", {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }

}

