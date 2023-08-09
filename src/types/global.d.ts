/**
 * 通用分类结果类型 PageResult
 * items总条数 counts总条数 pageSize分页条数 pages总页数 page当前页数
 */

export type PageResult<T> = {
	items : T[]
	counts : number
	page : number
	pages : number
	pageSize : number
}

/**
 * 通用分类参数类型 PageParams
 * page 页码值 pageSize 当前页大小
 */

export type PageParams = {
	page ?: number
	pageSize ?: number
}


/**
 * 通用商品类型 GoodsItem
 * desc 商品描述 discount 商品折扣 id 商品id name 商品昵称 
 * orderNum 商品已下单数量  picture 商品图片 price 商品价格
 */

export type GoodsItem = {
	desc : string
	discount : number
	id : string
	name : string
	orderNum : number
	picture : string
	price : number
}