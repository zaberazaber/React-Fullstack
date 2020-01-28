const express = require(express);


router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'get request to product'
    })
})