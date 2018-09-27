const Mock = require('mockjs');

const Random = Mock.Random;

const vipLevelArr = ['黄金会员', '银牌会员', '铜牌会员', '纯铁会员']; 

export const myCustomer = function() {
    let myCustomer = [];
	for(let i = 0; i < 10; i++) {
	    let myCustomerCell = {
	        productId: Random.integer(0,1000),
	        userName: Random.cword(3, 5),
	        userLevel: vipLevelArr[Math.floor((Math.random()*vipLevelArr.length))],
	        totalInvest:  Random.integer(0,100000),
	        totalAmount:  Random.integer(0,100000),
	        investNum:  Random.integer(0,10),
	        expirationTime: Random.datetime('yyyy-MM-dd'),
			createTime: Random.datetime('yyyy-MM-dd'), 
	    }	   
	    myCustomer.push(myCustomerCell);
	}
    return {
		data: myCustomer,
		totalPages: 4 
	}
}


// 用户姓名：userName 
// 会员等级：userLevel 
// 累计投资金额：totalInvest 
// 银豆数量：totalAmount 
// 投资笔数：investNum
// 最近到期日期：expirationTime
