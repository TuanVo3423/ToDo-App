import Particles from 'react-tsparticles';
import { configHome, configLogin } from './config';

export function ParticleHome() {
    return <Particles params={configHome}></Particles>;
}
export function ParticleLogin() {
    return <Particles params={configLogin}></Particles>;
}
