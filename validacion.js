function validateTarget (lan, lon) {
    if (typeof lon === 'number' && typeof lan === 'number' && lon >= 73.0 && lon <= 135.0 && lan >= 17.0 && lan <= 53.0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {validateTarget};