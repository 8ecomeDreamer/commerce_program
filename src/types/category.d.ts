import type { GoodsItem } from './global'

/**
 * 一级分类项 CategoryTopItem
 * children 二级分类集合[ 二级分类项 ]  id 一级分类id
 * imageBanners 一级分类图片集[ 一级分类图片项 ]
 * name 一级分类名称 picture 一级分类图片
 */

export type CategoryTopItem = {
  children: CategoryChildItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}

/**
 * 一级分类项 CategoryChildItem
 * goods 商品集合[ 商品项 ]  id 二级分类id
 * name 一级分类名称 picture 二级分类图片
 */
export type CategoryChildItem = {
  goods: GoodsItem[]
  id: string
  name: string
  picture: string
}
