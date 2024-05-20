import express from 'express';
import { Listing } from './infra/database/model/Listing.model';

const PORT = 3000;

const app = express();
const router = express.Router();

app.use(express.json());


let inMemoryListings = [{
    id: '1',
    title: 'L1',
    price: 100,
    description: 'Brief description'
}] as Listing[];


router.get('/listings', (req, res) => {
    res.status(200).json(inMemoryListings)
})

router.post('/listings', (req, res) => {
    const { body = {} } = req || {};

    if(Object.values(body).includes(null) || !Object.values(body).length) {
        res.status(400).json({ message: 'Bad request'});
        return;
    }

    if (!['title', 'price', 'description'].every(key => Object.keys(body).includes(key))) {
        res.status(400).json({ message: 'Bad request' });
        return;
    }
    

    const listing = {
        id: Math.round(Math.random() * 99).toString(),
        ...body,
    }

    inMemoryListings.push(listing)

    res.status(204).json({})
})


router.delete('/listings/:id', (req, res) => {
    const { id } = req.params || {};

    const filtered = inMemoryListings.filter(l => l.id !== id);
    inMemoryListings =  [...filtered];

    res.status(204).json({})
})

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is runnign on PORT: ${PORT}`)
})
