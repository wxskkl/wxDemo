import dayjs from 'dayjs';

const app = getApp();

Page({
	data: {
		date: '',
		show: false
	},
	// 常用 更多看查阅文档 https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html
	onLoad: (options: object) => {
		console.log('onLoad => 页面加载完成：', app.globalData, options);
	},
	onReady: () => {
		console.log('onReady => 页面初次渲染完成');
	},
	onShow: () => {
		console.log('onShow => 页面显示');
	},
	onHide: () => {
		console.log('onHide => 页面隐藏');
	},
	onTabItemTap: () => {
		console.log('onTabItemTap => 点击 tab');
	},
	onDisplay() {
		this.setData({ show: true });
	},
	onClose() {
		this.setData({ show: false });
	},
	formatDate(date: Date) {
		return `${dayjs(date).format('YYYY/MM/DD HH:mm:ss')}`;
	},
	onConfirm(event: any) {
		this.setData({
			show: false,
			date: this.formatDate(event.detail)
		});
	}
});
