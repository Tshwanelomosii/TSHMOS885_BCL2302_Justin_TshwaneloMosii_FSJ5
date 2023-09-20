/comments/some-event-id

function handler(req,res){
    const eventId=req.query.eventId;


    if (req.method==='POST'){
        const {email,name,text} = req.body;
        
        if(!email.includes('@')||
        !name ||
        name.trim()===''||
        !text.trim()===''
        ){
            res.status(422).json({message:'invalid input.'})
            return;
        }
        console.log(email,name,text)
        const newComment= {
            id: new Date().toISOString(),
            email,
            name,
            text,
        };
        res.status(201).json({message:'added comment.',comment:newComment})

    }
    if (req.method ==='GET'){

    }
}


export default handler;