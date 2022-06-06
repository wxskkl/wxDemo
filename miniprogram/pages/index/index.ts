// index.ts
// 获取应用实例

Page({
	data: {
		userInfo: {},
		hasUserInfo: false,
		canIUseGetUserProfile: false
	},
	onLoad() {
		// @ts-ignore
		if (wx.getUserProfile) {
			this.setData({
				canIUseGetUserProfile: true
			});
		}
	},
	getUserProfile() {
		// 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
		// 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
		wx.getUserProfile({
			desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			success: (res) => {
				this.setData(
					{
						userInfo: res.userInfo,
						hasUserInfo: true
					},
					() => {
						// this.setData是异步，需要保证数据已经修改了以后再执行其他操作
						console.log('123123123');
					}
				);
			}
		});
	}
});
