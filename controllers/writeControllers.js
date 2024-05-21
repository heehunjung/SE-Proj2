var model = require('../models');
var express = require('express');

exports.writeForm = async(req,res) => {
    res.render('write',{title: "게시판 글쓰기"});
};

exports.writeData = async(req,res) => {
    console.log(req.file);  // 파일 데이터 로그
    console.log(req.body);  
    var datas = {
        creator_id: req.body.creator_id,
        title: req.body.title,
        content: req.body.content,
        passwd: req.body.passwd,
        image_data: req.file.buffer
    }

    let result = await model.boards.create(datas).catch((err) => {
        console.error("Error while inserting data:", err);
        throw err; // 에러를 다시 throw 하여 상위 캐처에서 처리할 수 있도록 함
      });
    console.log(datas);
    
    res.redirect('/board');
}