import { connect } from 'mongoose';

const connectDb = async() => {
    try{
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDb connected successfully');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
export default connectDb;