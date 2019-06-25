import Profile from './profile';
import antiPlurality from './scf/anti-plurality';
import borda from './scf/borda';
import plurality from './scf/plurality';
import scoring from './scf/scoring';
import smc from './scf/smc';

const scf = {
    antiPlurality,
    borda,
    plurality,
    scoring,
    smc,
}

export {
    Profile,
    scf,
}