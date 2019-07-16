import { observable, action } from 'mobx'

export default class CommonStore {
    /**
     * 全局加载框状态
     */
    @observable loadingStatus = false 
    @action updateLoadingStatus = (value) => this.loadingStatus = value
}