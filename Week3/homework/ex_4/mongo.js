const {MongoClient, ObjectId} = require('mongodb');

async function main(){
    const uri = 'mongodb+srv://wasim:Wasim1991@cluster0.qgcuk.mongodb.net/world?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try{
    await client.connect();

    // insert city
    const MyCity =  {Name: "Damascus", CountryCode: "SYR", Population : 2079000};
    await client.db('world').collection('city').insertOne (MyCity); 
    console.log(`added city`);


    // Update city
    await client.db('world').collection('city').updateOne (
        {_id:ObjectId("5fa16dfeb842142a2018030d") },
        {$set: {Population : 2000000}});
        console.log('population has changed')


    // find the updated city by name
    const cityByName= await client.db ('world').collection('city').find({Name: "Damascus"})
    await cityByName.forEach(city => {console.log(city)});

    // / find the updated city by country code
    const cityByCode= await client.db ('world').collection('city').find({CountryCode: "SYR"})
    await cityByCode.forEach(city => {console.log(city)});


    // remove city
    await client.db('world').collection('city').deleteOne(
        {_id:ObjectId("5fa16dfeb842142a2018030d")})
        console.log('city deleted!')

    } catch (error){
        console.error(error);

    } finally {
        await client.close();
    }

    }

main();





