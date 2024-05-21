var model = require('../models');
var express = require('express');
var url =require('url');

exports.updateForm = async (req,res,next)=> {
    var queryData = url.parse(req.url,true).query;
    var id = queryData.id;

    let result = await model.boards.findAll({where: {id:parseInt(id)}}).catch((err)=>console.log(err));
    console.log("update에서 1개 글 조회 결과 확인: ", JSON.stringify(result));

    res.render('update',{title: "글 수정",row: result[0]});
};

exports.updateData = async (req,res) => {
    var id = req.body.id;
    console.log("Received ID:", req.body.id);  // 로그로 id 값을 출력하여 확인

    var passwd = req.body.passwd;
    var datas = {
        creator_id: req.body.creator_id,
        title: req.body.title,
        content: req.body.content,
        passwd: req.body.passwd,
        updatedAt: Date.now()
    }

    let result = await model.boards.update(datas, { where: { id: id, passwd: passwd } })
    .catch((err) => {
        console.error(err);  // 콘솔에 오류 로그 출력
        res.status(500).send("Internal Server Error"); // 서버 오류 메시지 전송
        return; // 이후 코드 실행 방지
    });


    if (result[0] === 0) {
        res.send("<script>alert('패스워드가 일치하지 않거나, 잘못된 요청으로 인해 변경되지 않았습니다.');history.back();</script>");
    } else {
        res.redirect('/board/read/' + id);  // 리다이렉트 올바르게 수행
    }

}