import Profile from './profile';
import antiPlurality from './scf/anti-plurality';
import borda from './scf/borda';
import plurality from './scf/plurality';
import scoring from './scf/scoring';

const scf = {
    antiPlurality,
    borda,
    plurality,
    scoring,
}

export {
    Profile,
    scf,
}