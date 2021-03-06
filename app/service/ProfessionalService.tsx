import { serverUrl } from '../util/config'
import { AsyncStorage } from 'react-native';
export default class ProfessionalService {
    private async loadCookies() {
        return await AsyncStorage.getItem('cookies');
    }

    public async getById(id: number) {
        const headers: any = await JSON.parse(await this.loadCookies())
        return await fetch(`${serverUrl}/api/v1/professional/${id}`, { headers })
            .then((res: any) => res.json())
            .then((res: any) => { return res })

    }


}