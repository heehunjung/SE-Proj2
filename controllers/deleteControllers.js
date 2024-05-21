var model = require('../models');
var express = require('express');

exports.deleteData =  async(req,res) => {
    var id = req.body.id;

    try {
        let result = await model.boards.destroy({
            where: {
                id: id,  // 삭제할 레코드의 ID
            }
        });

        if (result === 0) {
            res.send("<script>alert('패스워드가 일치하지 않거나, 잘못된 요청으로 인해 변경되지 않았습니다.');history.back();</script>");
        } else {
            res.send("<script>alert('게시글이 성공적으로 삭제되었습니다.');window.location.href='/board';</script>");
        }
    } catch (error) {
        res.status(500).send("<script>alert('서버 오류가 발생했습니다.');history.back();</script>");
    }

}