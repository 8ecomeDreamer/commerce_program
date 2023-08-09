/**
 * 通用的用户信息 BaseProfile
 * id 用户id avatar 用户头像 account 账户名 nickname 可选昵称
 */

type BaseProfile = {
	id : string
	avatar : string
	account : string
	nickname ?: string
}

/**
 * 小程序登录 登录用户信息 继承BaseProfile的LoginResult 
 * mobile 手机号 token 登录凭证
 */

export type LoginResult = BaseProfile & {
	mobile : string
	token : string
}

/**
 * 个人信息 用户详情信息 继承BaseProfile的ProfileDetail  属性全可选
 * gender 性别 birthday 生日  fullLocation 省市区 profession 职业
 */

export type Gender = '男' | '女'

export type profileDetail = BaseProfile & {
	gender ?: Gender
	birthday ?: string
	fullLocation ?: string
	professin ?: string
}


/**
 * 个人信息 修改请求体参数 ProfileParams
 */

export type ProfileParams = Pick<profileDetail, 'nickname' | 'gender' | 'birthday' | 'profession'> & {
	/** 省份编码 */
	provinceCode ?: string
	/** 城市编码 */
	cityCode ?: string
	/** 区/县编码 */
	countyCode ?: string
}