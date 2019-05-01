const express = require('express');
const router = express.Router();

const customers = [{
        "_id": 5054,
        "agent_id": 1987,
        "guid": "54fc8606-0630-42f9-9e3c-716772df09bf",
        "isActive": true,
        "balance": "$1,578.40",
        "age": 57,
        "eyeColor": "blue",
        "name": {
            "first": "Neva",
            "last": "Calderon"
        },
        "company": "ISOTRONIC",
        "email": "neva.calderon@isotronic.info",
        "phone": "+1 (985) 502-2956",
        "address": "573 Turner Place, Yukon, Federated States Of Micronesia, 762",
        "registered": "Wednesday, January 31, 2018 12:40 PM",
        "latitude": "76.989498",
        "longitude": "26.410977",
        "tags": [
            "eiusmod",
            "reprehenderit",
            "labore",
            "ut",
            "dolor"
        ]
    },
    {
        "_id": 8203,
        "agent_id": 467,
        "guid": "60e09079-3b7b-434a-9030-5f7f98eda232",
        "isActive": true,
        "balance": "$2,634.30",
        "age": 62,
        "eyeColor": "brown",
        "name": {
            "first": "Pope",
            "last": "Wheeler"
        },
        "company": "GEEKOLOGY",
        "email": "pope.wheeler@geekology.co.uk",
        "phone": "+1 (910) 453-2823",
        "address": "825 Cropsey Avenue, Homeworth, Puerto Rico, 7683",
        "registered": "Thursday, January 16, 2014 2:49 AM",
        "latitude": "59.528935",
        "longitude": "52.987053",
        "tags": [
            "cillum",
            "voluptate",
            "duis",
            "mollit",
            "ea"
        ]
    }
]

//GET
router.get('/', (req, res) => {
    res.send(customers);
});

module.exports = router;