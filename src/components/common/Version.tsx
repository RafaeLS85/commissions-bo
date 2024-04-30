
import {version} from '../../../package.json';

export const Version = () => {
    return (
        <small style={{ fontWeight: '400', position: "absolute", bottom: "0", left: "0" }}>DEMO v{version}</small> 
    )
}