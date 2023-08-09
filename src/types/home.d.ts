import type { GoodsItem } from './global'

/**
 * 首页-广告区域数据类型 BannerItem
 * hrefUrl 跳转链接 id banner图id 
 * imgUrl 图片链接 type 跳转类型
 */

export type BannerItem = {
	hrefUrl : string
	id : string
	imgUrl : string
	type : number
}

/**
 * 首页-前台类目数据类型 CategoryItem
 * icon 图标路径 id 数据id
 * name 分类名称
 */

export type CategoryItem = {
	icon : string
	id : string
	name : string
}

/**
 * 首页-热门推荐数据类型 HotItem
 * alt 说明文字 id 数据id pictures 图片路径
 * target 跳转地址  title 标题 type 推荐类型
 */

export type HotItem = {
	alt : string
	id : string
	pictures : string[]
	target : string
	title : string
	type : string
}

/**
 * 猜你喜欢-商品类型 GuessItem
 */

export type GuessItem = GoodsItem