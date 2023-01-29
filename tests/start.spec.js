import {inputMutiplyFive} from '../teset.js'
import { mount } from '@vue/test-utils'
import Counter  from '../Counter.vue'

describe('Test Function', ()=> {
    it('input 1 should output 5', () => {
        const input1 = inputMutiplyFive(1)
        expect(input1).toBe(5)
    })
    
    it('input 5 should output 25', () => {
        const input5 = inputMutiplyFive(5)
        expect(input5).toBe(25)
    })
}) 

describe('Test Vue Component',()=> {
    it('click button once',async ()=> {
        const wrapper = mount(Counter) // 用mount載入元件
        const incrementButton = wrapper.find('[data-testid="incrementButton"]') // 在按鈕元件上加上data-testid="incrementButton"的屬性，這邊用find去找到該元件
        await incrementButton.trigger('click') // 用trigger觸發click事件，會回傳一個promise，因此用await
        expect(wrapper.vm.count).toBe(1) //預期按一下count後，count的值增加1
    })

    it('click button twice', async ()=> {
        const wrapper = mount(Counter) // 用mount載入元件
        const incrementButton = wrapper.find('[data-testid="incrementButton"]') // 在按鈕元件上加上data-testid="incrementButton"的屬性，這邊用find去找到該元件
        await incrementButton.trigger('click') // 用trigger觸發click事件，會回傳一個promise，因此用await
        await incrementButton.trigger('click') // 用trigger觸發click事件，會回傳一個promise，因此用await
        expect(wrapper.vm.count).toBe(2) //預期按兩下count後，count的值為2
    })
})