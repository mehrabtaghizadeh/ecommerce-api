import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { mongoose } from 'mongoose';
import authRouter from './routes/auth.js'
import categoryRouter from './routes/category.js' 
import orderRouter from './routes/order.js'
import productRouter from './routes/product.js'
import commentRouter from './routes/comment.js'
import cookieParser from 'cookie-parser';
import upload from './utils/upload.js';
import cloudinary from './utils/cloudinary.js';


dotenv.config()
const app = express()

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("database is connected")
}).catch(err=>console.log(err))
app.use(cors({origin:'http://localhost:3000',credentials:true}))
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cookieParser())

   
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/cat",categoryRouter) 
app.use("/api/v1/orders",orderRouter)
app.use("/api/v1/products",productRouter)
app.use("/api/v1/comments",commentRouter)
app.post("/upload", upload.array("image",12), async (req, res) => {    
    try {
        let pictureFiles = req.files;
        if (!pictureFiles || pictureFiles.length === 0) {
            return res.status(400).send("No picture attached!");
        }

        let multiplePicturePromise = pictureFiles.map((picture, index) =>
            cloudinary.uploader.upload(picture.path, {
                public_id: `${Date.now()}_${index}`,
            })
        ); 

        const imageResponse = await Promise.all(multiplePicturePromise);

        const imagesUrl = imageResponse.map((image) => {
            const url = image.secure_url;
            const public_id = image.public_id
            return { url , public_id };
        });

        if (imagesUrl.length > 0) {
            return res.status(200).json(
                 imagesUrl
            );
        }
    } catch (err) {
        res.status(500).send(err.message || "Something went wrong!");
    }
});
app.listen(4000,()=>{
    console.log('server listening on port 4000')
})