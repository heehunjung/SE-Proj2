var model = require('../models');
var express = require('express');

module.exports = {
    readData: async (req,res,next) => {
        var id = req.params.id;
        let result = await model.boards.findAll({where: {id:parseInt(id)}}).catch((err) => console.log(err));
        if (result.length > 0) {
            const row = result[0];
            // BLOB 데이터를 base64로 인코딩
            console.log(row.image_data);
            if (row.image_data) {
                var imageBase64 = Buffer.from(row.image_data).toString('base64');
                row.imageBase64 = `data:image/jpeg;base64,${imageBase64}`;
            }
            console.log("1개 글 조회 결과 확인: ", id, JSON.stringify(row));
            res.render('read', { title: "글 조회", row: row });
        } else {
            res.status(404).send('Article not found');
        }
    }
};
