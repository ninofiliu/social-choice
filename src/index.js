import Profile from './profile';
import borda from './scf/borda';
import plurality from './scf/plurality';
import scoring from './scf/scoring';

const scf = {
    borda,
    plurality,
    scoring,
}

export {
    Profile,
    scf,
}