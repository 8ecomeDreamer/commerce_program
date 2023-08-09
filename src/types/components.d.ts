import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

// 声明一个模块，用于匹配所有以 "vue" 结尾的文件
declare module 'vue' {
	// 导出GlobalComponents 接口类型 其中XtxSwiper为XtxSwiper类型 XtxGuess为XtxGuess类型
	export interface GlobalComponents {
		XtxSwiper : typeof XtxSwiper
		XtxGuess : typeof XtxGuess
	}
}


// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
export type XtxSwiperInstance = InstanceType<typeof XtxSwiper>