import {mongoclient} from 'mongodb';

function handler(res,res){
    if (req.method === 'Post'){
   const userEmail = req.body.email;

   if(!userEmail || !userEmail.includes('@')){
    res.status(422).json({message:'invalid email address.'})
    return;
  }
//link missing line 12,
  MongoClient.connect

  console.log(userEmail);
  res.status(201).json({message:'signed up'})
 }
}
export default handler;