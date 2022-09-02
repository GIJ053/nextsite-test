const axios = require('axios')

// const getSellerInfo = (req, res) => {
//     async function getSeller() {
//         const sellerInfo = req.body.sellerInfo

//         const headers = {
//             "cache-control": "no-cache", //required
//             "x-uship-affiliate-id": "{x-uship-affiliate-id}" //Waiting for uship for id
//         }

//         const originContact = {
//             sellerInfo
//         }

//         try {
//             const result = await axios
//                 .post('URL', params, { headers })
//             console.log("The response");
//             console.log(result.data);
//             return res.json(result.data)
//         } catch (e) {
//             console.log("The response that was sent");
//             console.log("Error ");
//         }
//     }
// }

const redirectToUship = (req, res) => {
    const headers = {
        "cache-control": "no-cache", //required
        "x-uship-affiliate-id": "{x-uship-affiliate-id}" //Waiting for uship for id
    }

    
}