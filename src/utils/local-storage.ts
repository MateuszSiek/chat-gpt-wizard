import { getBucket } from '@extend-chrome/storage'

export interface Store {
    prompts: any[]
    b: number
}

export const localStorage = getBucket<Store>('store')
